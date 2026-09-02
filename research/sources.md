# Sources and method

Written 2 Sep 2026 in response to an external review that correctly found the
claim "every number is sourced" unsupported. It was. This file and `raw/` are
the fix.

## Tool and method

| | |
|---|---|
| Source | vidIQ MCP (`vidiq_channel_search`, `vidiq_channel_videos`, `vidiq_channel_stats`) |
| Retrieved | 2 Sep 2026 |
| Call used for medians | `vidiq_channel_videos(channelId, videoFormat="long", popular=false)` |
| Returns | Up to 50 most recent long-form uploads |
| Median | `statistics.median` over `viewCount` of the returned set |

**`popular=false` matters.** The default (`popular=true`) returns a channel's
most-viewed videos and will produce a median 10–100× too high. Every median in
this folder uses recent uploads.

**Why median, never mean.** These distributions are extremely heavy-tailed.
Mido Explained's 50 recent uploads have a median of 2,517 and a mean of 23,936
— a single 833,816-view video moves the mean by an order of magnitude. Any
figure in this folder quoted as an average from vidIQ's `avgViews` field is
lifetime mean and should be ignored.

## Channels verified with raw exports

| Channel | Channel ID | n | Median | File |
|---|---|---|---|---|
| Deconstructed | `UCje6-Yak9u1msy5l7sE9pBA` | 28 | 536,106 | `raw/deconstructed_long_recent28_2026-09-02.csv` |
| — its single-object era | (subset) | 10 | **365,607** | same file, `era` column |
| Casual Navigation | `UC5_HIscbiDZM0dMX-nCksuA` | 50 | 57,254 | `raw/casual-navigation_long_recent50_2026-09-02.csv` |
| Mido Explained | `UCH0fYAmg-lg8BauZAthSMrg` | 50 | **2,517** | `raw/mido-explained_long_recent50_2026-09-02.csv` |
| Secrets Of Simple Things | `UC_jxb70Zvhkn9THs6uUXnsA` | 50 | **865** | `raw/secrets-of-simple-things_long_recent50_2026-09-02.csv` |

Reproduce with:

    python3 -c "import csv,statistics;r=list(csv.DictReader(open(FILE)));print(statistics.median([int(x['view_count']) for x in r]))"

## Channels NOT verified — do not cite these until re-pulled

| Channel | Figure in folder | Status |
|---|---|---|
| Null State | median 243, 63 videos | Measured in an earlier session; raw not retained. Channel ID unknown. **Unverified.** |
| Small Things | median ~3,000, 281 videos | Same. **Unverified.** |
| Everything Simplified | median ~1,250, 20 videos | Same. **Unverified.** |
| Secret Life Explained | median ~235, tower crane 545,592, pivot to 12 and 5 views | Channel found (`UC7ep46nQcgMdsIoyDnxXcoQ`) but **video count has dropped from 21 to 13** — videos were deleted, so the original series can no longer be reconstructed. **Permanently unverifiable.** |
| Fascinating Horror, Underworld, Dark Records, Bright Sun Films, The Efficient Engineer, AiTelly, Spds | subscriber counts and `avgViews` | These are **lifetime means from `channel_search`**, not medians. They establish that incident-driven channels are large. They do not establish a floor. |
| RPM figures ($10.22 Education long-form, $0.328 US Shorts) | quoted in `format.md` | Third-party aggregate figures, no primary source recorded. **Treat as folklore.** |

## Known limitation

`vidiq_channel_videos` returns at most 50 videos. For channels with hundreds of
uploads the median is a median of the recent 50, not of the channel. That is the
right window for "what does this channel earn now", and the wrong window for
"what has this channel ever earned". Every median here is the former.

`estimatedEarnings` is populated on roughly 2–4% of records. The planned
RPM-by-length experiment could not be run and was abandoned rather than faked.

#!/usr/bin/env python3
"""Midnight Everyman - YouTube channel banner generator.
Renders at 2x then downsamples for clean line art.
"""
import math, os
from PIL import Image, ImageDraw, ImageFont

SS = 2                      # supersample factor
W, H = 2560, 1440
CW, CH = W*SS, H*SS

# ---- house palette (authoritative hex) ----
PAPER     = (0xEE,0xE5,0xCF)
PANEL     = (0xF5,0xEB,0xD6)
REFERENCE = (0xC9,0xC1,0xAC)
INK       = (0x24,0x26,0x22)
INK_MID   = (0x4A,0x4A,0x42)
INK_MUTE  = (0x7C,0x75,0x66)
CORAL     = (0xBD,0x4E,0x3D)
MUSTARD   = (0xD5,0xA8,0x4C)
TEAL      = (0x35,0x6F,0x70)

FONTS = os.path.join(os.path.dirname(__file__), '..', 'fonts')
def jost(size, weight):
    f = ImageFont.truetype(os.path.join(FONTS,'Jost.ttf'), size*SS)
    f.set_variation_by_axes([weight])
    return f
def courier(size):
    return ImageFont.truetype(os.path.join(FONTS,'CourierPrime-Regular.ttf'), size*SS)

def blend(a,b,t):
    return tuple(int(round(a[i]+(b[i]-a[i])*t)) for i in range(3))

# ---------------------------------------------------------------- glyphs
# each glyph(d, cx, cy, s, col, lw) draws inside a 2s x 2s box, in 2x space

def g_revolving_door(d,cx,cy,s,col,lw):
    """Escalator, side elevation. (Replaces the revolving-door plan, which read
    as a rifle scope at this size.)"""
    lwr=max(1,int(lw))
    # lower rail: landing - incline - landing
    d.line([cx-s*0.94,cy+s*0.66, cx-s*0.40,cy+s*0.66], fill=col, width=lwr)
    d.line([cx-s*0.40,cy+s*0.66, cx+s*0.46,cy-s*0.24], fill=col, width=lwr)
    d.line([cx+s*0.46,cy-s*0.24, cx+s*0.94,cy-s*0.24], fill=col, width=lwr)
    # handrail, offset above
    o=s*0.42
    d.line([cx-s*0.94,cy+s*0.66-o, cx-s*0.44,cy+s*0.66-o], fill=col, width=lwr)
    d.line([cx-s*0.44,cy+s*0.66-o, cx+s*0.42,cy-s*0.24-o], fill=col, width=lwr)
    d.line([cx+s*0.42,cy-s*0.24-o, cx+s*0.94,cy-s*0.24-o], fill=col, width=lwr)
    for ex,ey in ((cx-s*0.94,cy+s*0.66-o),(cx+s*0.94,cy-s*0.24-o)):
        d.ellipse([ex-lwr*1.1,ey-lwr*1.1,ex+lwr*1.1,ey+lwr*1.1], fill=col)
    # treads on the incline
    tw=max(1,int(lw*0.65))
    for k in range(1,5):
        t=k/5.0
        x=cx-s*0.40+(s*0.86)*t; y=cy+s*0.66-(s*0.90)*t
        d.line([x,y, x, y+s*0.17], fill=col, width=tw)
        d.line([x,y+s*0.17, x+s*0.17, y+s*0.17], fill=col, width=tw)

def g_lift_buttons(d,cx,cy,s,col,lw):
    w,h = s*0.72, s*1.18
    d.rounded_rectangle([cx-w,cy-h,cx+w,cy+h], radius=int(s*0.26), outline=col, width=lw)
    br = s*0.30
    for sign,oy in ((1,-h*0.42),(-1,h*0.42)):
        d.ellipse([cx-br,cy+oy-br,cx+br,cy+oy+br], outline=col, width=max(1,int(lw*0.8)))
        t = br*0.44
        if sign>0:
            d.line([cx-t,cy+oy+t*0.6, cx,cy+oy-t*0.7], fill=col, width=max(1,int(lw*0.8)))
            d.line([cx+t,cy+oy+t*0.6, cx,cy+oy-t*0.7], fill=col, width=max(1,int(lw*0.8)))
        else:
            d.line([cx-t,cy+oy-t*0.6, cx,cy+oy+t*0.7], fill=col, width=max(1,int(lw*0.8)))
            d.line([cx+t,cy+oy-t*0.6, cx,cy+oy+t*0.7], fill=col, width=max(1,int(lw*0.8)))

def g_sprinkler(d,cx,cy,s,col,lw,accent=None):
    top = cy-s*1.00
    # ceiling
    d.line([cx-s*0.98, top, cx+s*0.98, top], fill=col, width=lw)
    # threaded nipple
    nw = s*0.22
    d.rectangle([cx-nw, top, cx+nw, top+s*0.34], outline=col, width=lw)
    for i in range(2):
        yy = top+s*0.13+i*s*0.12
        d.line([cx-nw, yy, cx+nw, yy], fill=col, width=max(1,int(lw*0.55)))
    # hex boss
    hw = s*0.36
    d.rectangle([cx-hw, top+s*0.34, cx+hw, top+s*0.54], outline=col, width=lw)
    # frame arms: down and inward to the deflector
    d.line([cx-hw*0.80, top+s*0.54, cx-s*0.30, cy+s*0.56], fill=col, width=lw)
    d.line([cx+hw*0.80, top+s*0.54, cx+s*0.30, cy+s*0.56], fill=col, width=lw)
    # deflector disc (narrower than the ceiling flange)
    d.line([cx-s*0.52, cy+s*0.58, cx+s*0.52, cy+s*0.58], fill=col, width=lw)
    d.line([cx-s*0.52, cy+s*0.58, cx-s*0.44, cy+s*0.74], fill=col, width=max(1,int(lw*0.7)))
    d.line([cx+s*0.52, cy+s*0.58, cx+s*0.44, cy+s*0.74], fill=col, width=max(1,int(lw*0.7)))
    # glass bulb: short and stubby, between boss and deflector
    a = accent or col
    d.rounded_rectangle([cx-s*0.115, top+s*0.56, cx+s*0.115, cy+s*0.44],
                        radius=int(s*0.115), fill=a)

def g_thermostat(d,cx,cy,s,col,lw):
    r=s*0.92
    d.ellipse([cx-r,cy-r,cx+r,cy+r], outline=col, width=lw)
    ri=r*0.60
    d.ellipse([cx-ri,cy-ri,cx+ri,cy+ri], outline=col, width=max(1,int(lw*0.7)))
    for i in range(11):
        a=math.radians(135+i*27)
        x1,y1=cx+r*0.72*math.cos(a), cy+r*0.72*math.sin(a)
        x2,y2=cx+r*0.90*math.cos(a), cy+r*0.90*math.sin(a)
        d.line([x1,y1,x2,y2], fill=col, width=max(1,int(lw*0.6)))
    a=math.radians(-58)
    d.line([cx,cy,cx+ri*0.92*math.cos(a),cy+ri*0.92*math.sin(a)], fill=col, width=lw)

def g_door_closer(d,cx,cy,s,col,lw):
    bx,by = cx-s*0.92, cy-s*0.10
    d.rounded_rectangle([bx,by-s*0.34,bx+s*1.05,by+s*0.34], radius=int(s*0.12),
                        outline=col, width=lw)
    d.line([bx+s*0.22,by-s*0.34,bx+s*0.22,by+s*0.34], fill=col, width=max(1,int(lw*0.6)))
    # jointed arm
    jx,jy = cx+s*0.42, cy-s*0.62
    d.line([bx+s*1.05, by-s*0.08, jx, jy], fill=col, width=lw)
    d.line([jx, jy, cx+s*0.88, cy+s*0.48], fill=col, width=lw)
    for px,py in ((bx+s*1.05,by-s*0.08),(jx,jy),(cx+s*0.88,cy+s*0.48)):
        d.ellipse([px-lw*1.1,py-lw*1.1,px+lw*1.1,py+lw*1.1], fill=col)

def g_socket(d,cx,cy,s,col,lw):
    r=s*0.88
    d.rounded_rectangle([cx-r,cy-r,cx+r,cy+r], radius=int(s*0.22), outline=col, width=lw)
    # UK-style: earth above, live/neutral below
    ew=s*0.11
    d.rounded_rectangle([cx-ew,cy-s*0.52,cx+ew,cy-s*0.14], radius=int(ew*0.7), fill=col)
    for dx in (-0.40,0.40):
        d.rounded_rectangle([cx+s*dx-ew*1.5,cy+s*0.06,cx+s*dx+ew*1.5,cy+s*0.24],
                            radius=int(ew*0.7), fill=col)
    d.line([cx-s*0.44,cy+s*0.56,cx+s*0.44,cy+s*0.56], fill=col, width=max(1,int(lw*0.7)))

def g_cylinder(d,cx,cy,s,col,lw):
    w=s*0.58; top=cy-s*0.92; bot=cy+s*0.62
    d.rounded_rectangle([cx-w,top,cx+w,bot], radius=int(s*0.30), outline=col, width=lw)
    d.line([cx-w,cy-s*0.18,cx+w,cy-s*0.18], fill=col, width=max(1,int(lw*0.6)))
    d.line([cx-w,cy+s*0.16,cx+w,cy+s*0.16], fill=col, width=max(1,int(lw*0.6)))
    d.line([cx,bot,cx,cy+s*0.96], fill=col, width=lw)
    d.line([cx-s*0.26,cy+s*0.96,cx+s*0.26,cy+s*0.96], fill=col, width=lw)
    d.line([cx+w,top+s*0.30,cx+w+s*0.32,top+s*0.30], fill=col, width=max(1,int(lw*0.8)))

def g_ped_signal(d,cx,cy,s,col,lw):
    w,h=s*0.66,s*0.98
    d.rounded_rectangle([cx-w,cy-h,cx+w,cy+h*0.50], radius=int(s*0.12), outline=col, width=lw)
    d.line([cx,cy+h*0.50,cx,cy+s*1.05], fill=col, width=lw)
    d.line([cx-s*0.34,cy+s*1.05,cx+s*0.34,cy+s*1.05], fill=col, width=lw)
    # walking figure
    fx,fy=cx,cy-h*0.28
    hr=s*0.12
    d.ellipse([fx-hr,fy-hr*2.5,fx+hr,fy-hr*0.5], fill=col)
    d.line([fx,fy-hr*0.4,fx,fy+s*0.20], fill=col, width=max(1,int(lw*0.9)))
    d.line([fx,fy+s*0.20,fx-s*0.22,fy+s*0.46], fill=col, width=max(1,int(lw*0.9)))
    d.line([fx,fy+s*0.20,fx+s*0.20,fy+s*0.46], fill=col, width=max(1,int(lw*0.9)))
    d.line([fx,fy+s*0.02,fx+s*0.24,fy-s*0.10], fill=col, width=max(1,int(lw*0.9)))

def g_manhole(d,cx,cy,s,col,lw):
    r=s*0.92
    d.ellipse([cx-r,cy-r,cx+r,cy+r], outline=col, width=lw)
    ri=r*0.80
    d.ellipse([cx-ri,cy-ri,cx+ri,cy+ri], outline=col, width=max(1,int(lw*0.6)))
    step=ri*0.42
    k=2
    for i in range(-k,k+1):
        o=i*step
        half=math.sqrt(max(ri*ri-o*o,0))*0.86
        d.line([cx-half,cy+o,cx+half,cy+o], fill=col, width=max(1,int(lw*0.6)))
        d.line([cx+o,cy-half,cx+o,cy+half], fill=col, width=max(1,int(lw*0.6)))
    d.rectangle([cx-s*0.10,cy-r*0.99,cx+s*0.10,cy-r*0.78], fill=col)

def g_smoke_detector(d,cx,cy,s,col,lw):
    r=s*0.92
    d.ellipse([cx-r,cy-r,cx+r,cy+r], outline=col, width=lw)
    ri=r*0.52
    d.ellipse([cx-ri,cy-ri,cx+ri,cy+ri], outline=col, width=max(1,int(lw*0.75)))
    # radial vent slots between the two rings
    for k in range(12):
        a=math.radians(k*30+15)
        x1,y1=cx+r*0.64*math.cos(a), cy+r*0.64*math.sin(a)
        x2,y2=cx+r*0.86*math.cos(a), cy+r*0.86*math.sin(a)
        d.line([x1,y1,x2,y2], fill=col, width=max(1,int(lw*0.75)))
    # test button + LED
    d.ellipse([cx-s*0.16,cy-s*0.16,cx+s*0.16,cy+s*0.16], outline=col, width=max(1,int(lw*0.7)))
    d.ellipse([cx+ri*0.10-s*0.07,cy+ri*0.66-s*0.07,cx+ri*0.10+s*0.07,cy+ri*0.66+s*0.07], fill=col)

def g_euro_cylinder(d,cx,cy,s,col,lw):
    # lever handle on a backplate
    pw,ph = s*0.30, s*0.95
    px = cx-s*0.66
    d.rounded_rectangle([px-pw,cy-ph,px+pw,cy+ph], radius=int(s*0.24),
                        outline=col, width=lw)
    # keyhole in the plate
    d.ellipse([px-s*0.10,cy+s*0.34-s*0.10,px+s*0.10,cy+s*0.34+s*0.10],
              outline=col, width=max(1,int(lw*0.7)))
    d.line([px,cy+s*0.42,px,cy+s*0.60], fill=col, width=max(1,int(lw*0.7)))
    # rose
    rr=s*0.26
    d.ellipse([px-rr,cy-s*0.34-rr,px+rr,cy-s*0.34+rr], outline=col, width=lw)
    # lever, swept forward then down
    hy = cy-s*0.34
    d.line([px+rr*0.6,hy, cx+s*0.74,hy], fill=col, width=lw)
    d.line([cx+s*0.74,hy, cx+s*0.82,hy+s*0.30], fill=col, width=lw)

def g_tap(d,cx,cy,s,col,lw):
    base_y = cy+s*0.92
    # basin line
    d.line([cx-s*0.96, base_y, cx+s*0.96, base_y], fill=col, width=lw)
    # flange
    d.rectangle([cx-s*0.38, base_y-s*0.14, cx+s*0.38, base_y], outline=col, width=lw)
    # body
    bw=s*0.21
    d.rectangle([cx-bw, cy-s*0.34, cx+bw, base_y-s*0.14], outline=col, width=lw)
    # cross handle on top of the body
    d.line([cx, cy-s*0.34, cx, cy-s*0.62], fill=col, width=lw)
    d.line([cx-s*0.34, cy-s*0.62, cx+s*0.34, cy-s*0.62], fill=col, width=lw)
    d.line([cx, cy-s*0.78, cx, cy-s*0.46], fill=col, width=lw)
    # spout: out right, then down
    sy = cy-s*0.06
    d.line([cx+bw, sy, cx+s*0.78, sy], fill=col, width=lw)
    d.line([cx+s*0.78, sy, cx+s*0.78, cy+s*0.36], fill=col, width=lw)
    # drip
    d.ellipse([cx+s*0.78-s*0.075, cy+s*0.58-s*0.10,
               cx+s*0.78+s*0.075, cy+s*0.58+s*0.10], fill=col)

def g_extinguisher(d,cx,cy,s,col,lw):
    w=s*0.42; top=cy-s*0.52; bot=cy+s*0.92
    d.rounded_rectangle([cx-w,top,cx+w,bot], radius=int(s*0.16), outline=col, width=lw)
    d.line([cx-w,cy+s*0.18,cx+w,cy+s*0.18], fill=col, width=max(1,int(lw*0.6)))
    d.rectangle([cx-s*0.14,top-s*0.26,cx+s*0.14,top], outline=col, width=max(1,int(lw*0.8)))
    d.line([cx-s*0.30,top-s*0.30,cx+s*0.34,top-s*0.30], fill=col, width=lw)
    d.line([cx-s*0.30,top-s*0.52,cx+s*0.10,top-s*0.52], fill=col, width=max(1,int(lw*0.8)))
    d.line([cx+w,cy-s*0.20,cx+s*0.92,cy+s*0.10], fill=col, width=max(1,int(lw*0.7)))
    d.line([cx+s*0.92,cy+s*0.10,cx+s*0.86,cy+s*0.52], fill=col, width=max(1,int(lw*0.7)))

GLYPHS = [
    ('escalator',       g_revolving_door),
    ('lift call panel', g_lift_buttons),
    ('sprinkler head',  g_sprinkler),
    ('thermostat',      g_thermostat),
    ('door closer',     g_door_closer),
    ('socket',          g_socket),
    ('water cylinder',  g_cylinder),
    ('pedestrian signal', g_ped_signal),
    ('manhole cover',   g_manhole),
    ('smoke detector',  g_smoke_detector),
    ('lever handle',    g_euro_cylinder),
    ('tap',             g_tap),
    ('extinguisher',    g_extinguisher),
]

# ---------------------------------------------------------------- layout
# YouTube geometry (in 1x px on a 2560x1440 upload)
SAFE_W, SAFE_H = 1546, 423
SAFE_X, SAFE_Y = 507, 509
TABLET_W = 1855
BAND_Y0, BAND_Y1 = SAFE_Y, SAFE_Y+SAFE_H       # 509 .. 932

def draw_banner(with_guides=False):
    img = Image.new('RGB',(CW,CH),PAPER)
    d = ImageDraw.Draw(img)
    S = SS

    # --- faint full-height column grid (reference grey, croppable) ---
    grid_col = blend(PAPER, REFERENCE, 0.55)
    PITCH = 160
    n = W//PITCH
    for i in range(n+1):
        x = i*PITCH*S
        d.line([x,0,x,CH], fill=grid_col, width=1*S)

    # --- ghost specimen rows outside the band (TV-only texture, safe to crop) ---
    ghost = blend(PAPER, INK, 0.085)
    for row_y, offset in ((236, 0), (1204, PITCH//2)):
        for i in range(-1, n+2):
            cx = (i*PITCH + offset + PITCH//2)*S
            cy = row_y*S
            name, fn = GLYPHS[(i*5+ (0 if offset==0 else 7)) % len(GLYPHS)]
            fn(d, cx, cy, 60*S, ghost, max(1,int(2.4*S)))

    # --- the specimen index strip, inside the band ---
    # Hand-set sequence. Indices into GLYPHS. Constraints:
    #  - no glyph repeats within 12 slots
    #  - no two similar silhouettes (cylinder/extinguisher) adjacent
    #  - the sprinkler sits at ACCENT_POS, inside the safe zone, left of centre
    SEQ = [8, 5, 1, 12, 3, 2, 0, 9, 11, 4, 6, 7, 10, 8, 5, 1, 12, 3]
    ACCENT_POS = 5
    strip_y = 580
    for pos in range(len(SEQ)):
        i_slot = pos - 1
        cx = i_slot*PITCH + PITCH//2
        if cx < -PITCH or cx > W+PITCH:
            continue
        name, fn = GLYPHS[SEQ[pos]]
        if pos == ACCENT_POS:
            fn(d, cx*S, strip_y*S, 44*S, INK, max(1,int(3.4*S)), accent=CORAL)
        else:
            fn(d, cx*S, strip_y*S, 44*S, INK_MID, max(1,int(3.0*S)))
        if 0 <= cx <= W:
            f = courier(15)
            lbl = f"{pos:02d}"
            bb = d.textbbox((0,0), lbl, font=f)
            d.text((cx*S-(bb[2]-bb[0])/2, (strip_y+64)*S), lbl,
                   font=f, fill=CORAL if pos==ACCENT_POS else INK_MUTE)

    # --- wordmark ---
    wm = "MIDNIGHT EVERYMAN"
    fw = jost(120, 600)
    bb = d.textbbox((0,0), wm, font=fw)
    tw, th = bb[2]-bb[0], bb[3]-bb[1]
    wx = (CW-tw)/2 - bb[0]
    wy = 736*S - bb[1]
    d.text((wx,wy), wm, font=fw, fill=INK)

    # --- coral rule under the wordmark ---
    rule_y = (736+126)*S
    rw = tw*0.24
    d.rectangle([(CW-tw)/2, rule_y, (CW-tw)/2+rw, rule_y+int(5*S)], fill=CORAL)

    # --- tagline ---
    tag = "YOU'VE WALKED PAST IT TEN THOUSAND TIMES"
    ft = jost(27, 400)
    track = int(7.6*S)
    widths = [d.textlength(c, font=ft) for c in tag]
    total = sum(widths) + track*(len(tag)-1)
    x = (CW-total)/2
    ty = 880*S
    for c,cwid in zip(tag,widths):
        d.text((x,ty), c, font=ft, fill=INK_MUTE)
        x += cwid + track

    img = img.resize((W,H), Image.LANCZOS)

    if with_guides:
        gd = ImageDraw.Draw(img, 'RGBA')
        def box(x,y,w,h,col,label,lx=6,ly=-20):
            gd.rectangle([x,y,x+w-1,y+h-1], outline=col, width=2)
            gf = ImageFont.truetype(os.path.join(FONTS,'CourierPrime-Regular.ttf'), 18)
            gd.text((x+lx, y+ly), label, font=gf, fill=col)
        gd.rectangle([0,0,W-1,H-1], outline=(0x7C,0x75,0x66,200), width=2)
        gf = ImageFont.truetype(os.path.join(FONTS,'CourierPrime-Regular.ttf'), 18)
        gd.text((8,8), "TV / UPLOAD 2560x1440", font=gf, fill=(0x7C,0x75,0x66,255))
        box(0, SAFE_Y, W, SAFE_H, (0x35,0x6F,0x70,255), "DESKTOP 2560x423")
        box((W-TABLET_W)//2, SAFE_Y, TABLET_W, SAFE_H, (0xD5,0xA8,0x4C,255),
            "TABLET 1855x423", 6, SAFE_H+4)
        box(SAFE_X, SAFE_Y, SAFE_W, SAFE_H, (0xBD,0x4E,0x3D,255),
            "SAFE 1546x423 - visible on every device")
        gd.rectangle([SAFE_X,SAFE_Y,SAFE_X+SAFE_W-1,SAFE_Y+SAFE_H-1],
                     fill=(0xBD,0x4E,0x3D,26))
    return img

out = os.path.dirname(os.path.abspath(__file__))
clean = draw_banner(False)
clean.save(os.path.join(out,'midnight-everyman-banner-2560x1440.png'))
guides = draw_banner(True)
guides.save(os.path.join(out,'banner-guides.png'))
clean.crop((SAFE_X, SAFE_Y, SAFE_X+SAFE_W, SAFE_Y+SAFE_H)).save(
    os.path.join(out,'banner-crop-mobile-1546x423.png'))
clean.crop((0, SAFE_Y, W, SAFE_Y+SAFE_H)).save(
    os.path.join(out,'banner-crop-desktop-2560x423.png'))
for f in ('midnight-everyman-banner-2560x1440.png','banner-guides.png'):
    p=os.path.join(out,f)
    im=Image.open(p); im.resize((854,480), Image.LANCZOS).save(p.replace('.png','-preview.png'))
Image.open(os.path.join(out,'banner-crop-mobile-1546x423.png')).resize((854,234),Image.LANCZOS).save(os.path.join(out,'crop-mobile-preview.png'))
Image.open(os.path.join(out,'banner-crop-desktop-2560x423.png')).resize((1100,181),Image.LANCZOS).save(os.path.join(out,'crop-desktop-preview.png'))
print("ok")
for f in sorted(os.listdir(out)):
    if f.endswith('.png'):
        print(f, os.path.getsize(os.path.join(out,f)))

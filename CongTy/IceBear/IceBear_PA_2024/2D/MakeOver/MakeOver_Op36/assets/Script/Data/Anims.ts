enum Intro_SpiderAnim {
    Action = "action01",
    Idle = "idle01",
}


enum Intro_DollAnim {
    Walk = "action01",
    Scare = "action02",
    Idle = "idle0",
}


enum LipsAnim {
    Dry = "action04",
    DirtySmell = "action03",
    Idle = "idle02",
}


enum bubbleAnim {
    Clean = "action04_bubble_clean",
    Show = "action03_only_bubble",
}


enum waterToothAnim {
    Idle = "Idle1",
    Action = "action01",
}


export class SpineAnims {
    static LipsAnim: typeof LipsAnim = LipsAnim;
    static Intro_DollAnim: typeof Intro_DollAnim = Intro_DollAnim;
    static Intro_SpiderAnim: typeof Intro_SpiderAnim = Intro_SpiderAnim;
    static bubbleAnim: typeof bubbleAnim = bubbleAnim;
    static waterToothAnim: typeof waterToothAnim = waterToothAnim;
}
import React from 'react';

import VID_John from '../images/vid_john.mp4'
import VID_LaserCat from '../images/vid_lasercat.mp4'
import VID_Christmas from '../images/vid_xmas.mp4'
import VID_Bogjog from '../images/vid_bogjog.mp4'
import VID_Laserkart from '../images/vid_laserkart.mp4'
import VID_Marcel from '../images/vid_marcel.mp4'
import VID_Inkjet from '../images/vid_inkjet.mp4'
import VID_Scribbles from '../images/vid_scribbles.mp4'

const typecolors = {
    "Jam Project - Team": "#993355",
    "Jam Project - Solo": "#993355",
    "FANGAME": "#993355",
    "SOUNDTRACK": "#339955",
    "MUSIC": "#339955",
    "ALBUM": "#339955",
}

function addElement(name, link, thumbnail, blurb, timeframe, playLink, playText, typename, mainpageblurb, screenshot, sourceLink, vid) {
    if (screenshot == null) {
        screenshot = thumbnail
    }
    var color = "white"
    if (typecolors[typename] != null) {
        color = typecolors[typename]
    }
    return {
        linkName: link,
        name: name,
        imgName: thumbnail,
        screenshotName: screenshot,
        blurb: blurb,
        mainpageblurb: mainpageblurb,
        timeframe: timeframe,
        playLink: playLink,
        playText: playText,
        sourceLink: sourceLink,
        typeName: typename,
        color: color,
        video: vid,
    }
}

export var elementPool = {
    eventhorizon: addElement(
        "EVENT HORIZON",
        "eventhorizon",
        "thumbnails_eventhorizon.png",
        "Fight an alien invasion and prevent the erasure of the universe.",
        "2023/5 - 2023/7",
        "https://enjl.itch.io/event-horizon",
        "Play on itch.io",
        "Jam Project - Solo",
        <div>Fight an alien invasion and prevent the erasure of the universe. Created in a week for Bullet Hell Jam 2023.</div>
    ),
    fadingsignal: addElement(
        "FADING SIGNAL",
        "fadingsignal",
        "thumbnails_fadingsignal.png",
        "Delve into a dangerous otherworldly cavern on a mission to restore a radio signal.",
        "2023/3",
        "https://enjl.itch.io/fading-signal",
        "Play on itch.io",
        "Jam Project - Team",
        <div>Delve into a dangerous otherworldly cavern on a mission to restore a radio signal. Created in a week for Roguelike Jam 2023.</div>
    ),
    sallysscribbles: addElement(
        "Sally's Scribbles",
        "sallysscribbles",
        "thumbnails_sallysscribbles.png",
        "Draw a painting every 10 seconds and keep your business afloat! Meet a lovable cast of characters, as well as Broccoli Steven.",
        "2022/9 - 2022/12",
        "https://enjl.itch.io/sallys-scribbles",
        "Play on itch.io",
        "Jam Project - Team",
        <div>Draw a painting every 10 seconds and keep your business afloat! I lead the team of 4 and handled all in-engine work. Originally created in 3 days for Ludum Dare 51 and later expanded with a content update.</div>,
        undefined,
        "https://github.com/enjlectric/SallysScribbles",
        VID_Scribbles
    ),
    melting: addElement(
        "Melting",
        "melting",
        "thumbnails_melting.png",
        "A 11-track album, made to practice music production further.",
        "2022/7 - 2022/11",
        "https://enjl.bandcamp.com/album/melting",
        "Listen on bandcamp",
        "ALBUM",
        <div>"Isn't it a bit irresponsible, worshiping an unstoppable force of destruction? They say its stories are fiction, but the destructive magic we are witnessing is real."</div>
    ),
    inkjet: addElement(
        "Inkjet",
        "inkjet",
        "thumbnails_inkjet.png",
        "Defeat a powerful foe in this paint-themed shoot-em up.",
        "2022/6",
        "https://enjl.itch.io/inkjet",
        "Play on itch.io",
        "Jam Project - Team",
        <div>Defeat a powerful foe in this paint-themed shoot-em up. Made in 2 days for a private game jam with friends. I handled the programming while my teammate did the art.</div>,
        undefined,
        undefined,
        VID_Inkjet
    ),
    hotelmarcel: addElement(
        "Hotel Marcel",
        "hotelmarcel",
        "thumbnails_hotelmarcel.png",
        "Defend yourself from an onslaught of enemies for as long as you can in this Game & Watch-style shooter.",
        "2022/5",
        "https://enjl.itch.io/hotel-marcel",
        "Play on itch.io",
        "Jam Project - Team",
        <div>Defend yourself from an onslaught of enemies for as long as you can in this Game & Watch-style shooter. Made in 8 hours for a private game jam with friends. I handled the programming while my teammate did the art.</div>,
        undefined,
        undefined,
        VID_Marcel
    ),
    laserkart: addElement(
        "Laser Kart",
        "laserkart",
        "thumbnails_laserkart.png",
        "The incredible sequel to LASER CAT! Drift and swerve through 2 stages packed to the brim with hostile vehicles and their bullets. Made in 9 days for Bullet Hell Jam 2022.",
        "2022/4",
        "https://enjl.itch.io/laser-kart",
        "Play on itch.io",
        "Jam Project - Solo",
        <div>The incredible sequel to LASER CAT! Drift and swerve through 2 stages packed to the brim with hostile vehicles and their bullets. Made in 9 days for Bullet Hell Jam 2022.</div>,
        undefined,
        undefined,
        VID_Laserkart
    ),
    chroma: addElement(
        "Chroma",
        "chroma",
        "thumbnails_chroma.png",
        "A 22-track album, made to practice music production further.",
        "2021/9 - 2022/2",
        "https://enjl.bandcamp.com/album/chroma",
        "Listen on bandcamp",
        "ALBUM",
        <div>A century ago, a wanderer from outer space visited our world, warning of a calamity that would soon befall it. But his aid was not enough.<br/>Includes 22 tracks of electronic music, themed around the a world slowly losing its color.</div>
    ),
    bogjogost: addElement(
        "Barry's Bog Jog OST",
        "bogjogost",
        "thumbnails_bogjogost.png",
        "Soundtrack for Barry's Bog Jog, featuring 4 tracks.",
        "2022/3",
        "https://enjl.bandcamp.com/album/barrys-bog-jog-ost",
        "Listen on bandcamp",
        "SOUNDTRACK"
    ),
    bogjog: addElement(
        "Barry's Bog Jog",
        "bogjog",
        "thumbnails_bogjog.png",
        "Mystery Dungeon game for 7DRL Jam 2022 created in 7 days.",
        "2022/3",
        "https://enjl.itch.io/barrys-bog-jog",
        "Play on itch.io",
        "Jam Project - Solo",
        <div>Mystery Dungeon game with 29 floors of action, made in 7 days for 7 Day Roguelike Jam 2022.</div>,
        undefined,
        undefined,
        VID_Bogjog
    ),
    john: addElement(
        "My Neighbour, John",
        "john",
        "thumbnails_john.png",
        "A 3D location created in 2 days with the theme \"Wave\". Cohesiveness and progression took a back seat to surreal inclusions.",
        "2021/11",
        "https://enjl.itch.io/my-neighbour-john",
        "Play on itch.io",
        "Jam Project - Solo",
        <div>Explore a surreal city and wave hello to everyone like a good neighbour.<br/><br/>3D roaming game made in 72 hours for an internal jam with the theme "Wave".</div>,
        null,
        null,
        VID_John
    ),
    laserCat: addElement(
        "Laser Cat",
        "lasercat",
        "thumbnails_lasercat.png",
        "Shoot-em-up created solo in 9 days for the GDN Jam 2021. Features 8 endlessly looping waves of enemies, two bosses and a death-based skill progression system. It placed #2 overall, #1 in gameplay.",
        "2021/8",
        "https://enjl.itch.io/laser-cat",
        "Play on itch.io",
        "Jam Project - Solo",
        <div>Battle through 8 infinitely repeating waves of enemies as a cat in space! You start out with nine lives, and will be able to become stronger with each reincarnation.<br/><br/>Solo project created in 9 days for the GDN Jam 2021. 2nd place overall, 1st place in gameplay.</div>,
        "scrn_lc.png",
        "https://github.com/enjlectric/lasercat",
        VID_LaserCat
    ),
    laserCatOst: addElement(
        "Laser Cat OST",
        "lasercat",
        "thumbnails_lasercato.png",
        "Soundtrack for Laser Cat, featuring 6 tracks made within a couple hours on a stressful Saturday.",
        "2021/8",
        "https://enjl.bandcamp.com/album/laser-cat-ost",
        "Listen on bandcamp",
        "SOUNDTRACK"
    ),
    megakiller: addElement(
        "MEGAKILLER",
        "megakiller",
        "thumbnails_megakiller.png",
        "A 16-track album, made to hone my abilities in working with beats and basslines.",
        "2021/6 - 2021/8",
        "https://enjl.bandcamp.com/album/megakiller",
        "Listen on bandcamp",
        "ALBUM",
        <div>Our endless travels have led us into the maw of the beast - a reality ravaged by an invincible force - the MEGAKILLER.<br/>Includes sixteen tracks of electronic music, themed around the presence of this invincible opponent.</div>
    ),
    snipsnip: addElement(
        "SnipSnip",
        "snipsnip",
        "thumbnails_snipsnip.png",
        "Top-down multiplayer versus game created solo in 48 hours for the GMTK Game Jam 2021. Features 4-player online multiplayer and 3 original music tracks.",
        "2021/6",
        "https://enjl.itch.io/snipsnip",
        "Download from itch.io",
        "Jam Project - Solo",
        <div>Participate in competitive snipping action with up to three friends! Aim to claim the most area without getting your own threads snipped by your opponents - or try to snip through their efforts instead.<br/>Snipsnip was created for the GMTK Game Jam 2021 with the theme "Joined Together"</div>,
        "scrn_snip.png"
    ),
    // stargrove: addElement(
    //     "Stargrove Scramble",
    //     "stargrove",
    //     "thumbnails_stargrove.png",
    //     "Provided QA testing and level design feedback for Team Bugulon's Newgrounds Jam 2021 entry.",
    //     "2021/7",
    //     "https://team-bugulon.itch.io/stargrove-scramble",
    //     "Play on itch.io",
    //     "Jam Project - Team",
    //     <div>Your son has been taken! Sling your eggs at foes and platform through three unique worlds in search of his captor. Though tread lightly, his henchmen will try to stop you at every turn.<br/>Stargrove Scramble is a platformer made in 9 days for Newgrounds July Jam 2021 with the theme "Egg".</div>
    // ),
    weare: addElement(
        "We Are",
        "weare",
        "thumbnails_weare.png",
        "A 12-track album, made to see if I was proficient enough to conjure up an album all by itself. Inspired by outer space.",
        "2021/2 - 2021/3",
        "https://enjl.bandcamp.com/album/we-are",
        "Listen on bandcamp",
        "ALBUM",
        <div>The product of outer space nostalgia.<br/>Includes twelve music tracks inspired by outer space.</div>
    ),
    xmas: addElement(
        "A Christmas Thing",
        "xmas",
        "thumbnails_xmas.png",
        "Contributed 3D Platformer levels and helped with scriptiong functionality of elements such as moving platforms. This game was developed as a christmas present for the YouTuber raocow.",
        "2017/10 - 2017/12",
        "https://www.youtube.com/watch?v=A6IcafKZebI",
        "Video playthrough",
        "Free Time Project - Team",
        <div>A small 3D platformer game created by three friends and myself over the course of three months for YouTuber <i>raocow's</i> 2017 christmas event.<br/><br/>My responsibilities included the design of the hub world and two levels, as well as helping with the game's programming, including writing the moving platform code specifically.</div>,
        undefined,
        undefined,
        VID_Christmas
    ),
    // h2o: addElement(
    //     "H2Ω - Ohm's Lab",
    //     "h2o",
    //     "thumbnails_h2o.png",
    //     "Programmed an endless vertical side-scrolling shooter for the 2nd semester of studying Game Design.",
    //     "2016/10 - 2017/2",
    //     null,
    //     null,
    //     "Uni Semester Project - Team"
    // ),
    // jungle: addElement(
    //     "Jungle Clicker",
    //     "jungle",
    //     "thumbnails_jungle.png",
    //     "Programmed an educational idle clicker game for mobile devices for the 3rd semester of studying Game Design.",
    //     "2017/4 - 2017/8",
    //     null,
    //     null,
    //     "Uni Semester Project - Team"
    // ),
    // sysy: addElement(
    //     "System Sync",
    //     "sysy",
    //     "thumbnails_sysy.png",
    //     "Managed, programmed and designed 4 stages for a 2-player cooperative side scroller for the 4th semester of studying Game Design.",
    //     "2017/10 - 2018/2",
    //     null,
    //     null,
    //     "Uni Semester Project - Team",
    //     <div>A two-player puzzle platformer themed around magnetism, created as a semester project for my fourth semester at university.<br/><br/>My responsibilities included the game's programming and the design of its four levels. Additionally, I contributed to the fundamental game design.</div>,
    //     undefined,
    //     undefined,
    //     VID_Systemsync
    // ),
    // monster: addElement(
    //     "The Little Monster In Your Closet",
    //     "monster",
    //     "thumbnails_monster.png",
    //     "Programmed a 3D platformer and designed one large, exploration-focused stage for the 5th semester of studying Game Design.",
    //     "2018/4 - 2018/8",
    //     null,
    //     null,
    //     "Uni Semester Project - Team"
    // ),
    // pirate: addElement(
    //     "Pinball Pirate's Curse",
    //     "pirate",
    //     "thumbnails_pirate.png",
    //     "Managed, programmed and contributed pixel art to a pinball game for the GMTK Game Jam 2018.",
    //     "2018/6",
    //     "https://enjl.itch.io/pinball-pirates-curse",
    //     "Play on itch.io",
    //     "Jam Project - Team"
    // ),
    // hah: addElement(
    //     "Helpless and Healthless",
    //     "hah",
    //     "thumbnails_hah.png",
    //     "Managed, programmed and contributed pixel art to a top-down dungeon crawler for the GMTK Game Jam 2019.",
    //     "2019/6",
    //     "https://enjl.itch.io/hah",
    //     "Play on itch.io",
    //     "Jam Project - Team"
    // )
}
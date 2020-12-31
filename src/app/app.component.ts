import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storywords';
  words = [];

  fantasyWordOptions = `Abnormal,Adventure,Alchemy,Amulet,Apparition,Apprentice,Awe,Beast,Beauty,Berserk,Bizarre,Blind,Brew,
Castle,Cauldron,Cave,Chalice,Charming,Clairvoyant,Clock,Collapse,Conjure,Conspirator,Creature,Crisis,Crow,Crystal ball,Curious,Curse
Dance,Daring,Deformity,Delirious,Demon,Detect,Detective,Disappear,Disaster,Dragon,Dramatic,Dread,Dream,Dwarf,Eerie,Elf,Empire,Enchant,
Evil,Experience,Fable,Fairy,Familiar,Fanciful,Fantastic,Favors,Fiery,Figment,Folklore,Foolish,Forces,Forgery,Garb,Ghost,Giant,Gift,
Glimmer,Gnome,Goblin,Godmother,Gowns,Grateful,Graveyard,Grotesque,Hag,Hallucinate,Harbinger,Helpful,Herbs,Heroic,Horror,Howls,Hump,
Illusion,Image,Imp,Impressive,Improvise,Impulse,Incantation,Incognito,Informative,Ingenious,Inspiration,Invisible,Jiggle,Joking,
Keepsake,Kettle,Kidnap,King,Kingdom,Lands,Legend,Leprechaun,Lore,Lucky,Lunar,Magic,Magician,Majesty,Malevolence,Mask,Miracle,Mischief,
Monster,Moon,Muse,Mystery,Mystic,Myth,Nature,Necromancer,Nemesis,Newt,Notion,Odd,Ogre,Oracle,Otherworldly,Overwhelm,Owl,Pattern,Perform,
Pixie,Plot,Poison,Potent,Potion,Power,Prey,Prince,Prophet,Protect,Prowl,Quail,Quake,Quash,Quiver,Queen,Quest,Quizzical,Rage,Realm,
Reasoning,Reign,Repel,Robe,Rule,Sage,Scare,Scold,Scroll,Seeking,Seer,Sorcerer,Sorcery,Spell,Spider,Spirit,Star,Story,Supernatural,
Superstition,Talisman,Terror,Thrill,Torch,Tragic,Transform,Trick,Troll,Unbelievable,Unexplained,Unicorn,Unusual,Vampire,Vanguard,
Vanish,Vanquish,Vicious,Wail,Wand,Ward,Weird,Werewolf,Whim,Wicked,Wisdom,Wish, Witch,Worship,Wrinkled,Youth`
.split(',').map(word => word.trim());

scifiWordOptions = `Abolish,Adventure,Affect,Alignment,Alliance,Alter,Animation,Appeal,Atmosphere,Atomic,Automation,Barren,Behavior,
Bizarre,Books,Breach,Change,Chemical,Civilize,Clone,Conductivity,Creatures,Culture,Cyborgs,Danger,Death,Dense,Development,Discovery,
Disease,Distant,Distopia,Disturbance,Document,Dreamer,Drugs,Earth,Eerie,Effects,Enemy,Energy,Episode,Evidence,Experiment,Explanation,
Explore,Explosion,Exposure,Extreme,Fighting,Film,Fire,Force,Function,Fundamental,Futuristic,Galaxy,Gale,Glimpse,Gothic,Gravity,
Hallucinate,Herbs,Hobby,Holographic,Horror,Hypnosis,Hypothesis,Ideal,Identical,Identify,Illegal,Illness,Illusion,Imagination,
Inexplicable,Influence,Inhabitant,Interpret,Investigate,Jargon,Judgment,Jumble,Keen,Law,Literature,Lunar,Magnet,Manuscript,Marvel,
Meteors,Microbe,Miraculous,Mistake,Monstrous,Moon,Motion,Murky,Mysterious,Myth,Nightmare,Nuclear,Oasis,Observation,Oracle,Order,
Paralysis,Particle,Personality,Pestilence,Planet,Pleasure,Politics,Popular,Population,Potential,Prediction,Prehistoric,Preserve,
Pressure,Probe,Problem,Pulp,Purpose,Quantity,Queasy,Quest,Question,Quirk,Reaction,Reality,Recovery,Revolutionary,Righteous,Robot,
Safety,Salvation,Scare,Scenario,Scope,Security,Sequence,Situation,Sounds,Space,Spirit,Stage,Stars,Strange,Synthetic,Technology,
Temperature,Tense,Theoretical,Time,Token,Trap,Travel,Unexplainable,Unification,Unique,Universe,Unleash,Unmanned,Urge,Utopia,Vacuum,
Victim,Violence,Virtual,Voyage,Wary,Weird,Winged,Wisdom,World,X-ray,Zeal`.split(',').map(word => word.trim());

mythologyWordOptions = `Abominable,Admiration,Adventure,Aggression,Allegory,Amazon,Ancestor,Anthropomorphic,Authority,Awe-inspiring,
Basilisk,Behemoth,Beliefs,Calamity,Calypso,Celestial,Celtic,Centaur,Chimera,Chivalry,Conqueror,Conspiracy,Constellation,Creation,
Creature,Culture,Cycle,Daring,Deeds,Deities,Demigod,Demon,Descent,Destruction,Dire,Disaster,Discovery,Disintegrate,Distant,
Disturbance,Divine,Dragon,Dryad,Elements,Essence,Evil,Existence,Explanation,Exploit,Exposure,External,Extraordinary,Fauna,Fertility,
Fire-breathing,Flight,Flora,Folklore,Forces,Frenzy,Giant,God,Goddess,Gorgons,Greed,Gryphon,Harmonious,Harpies,Hatred,Heaven,Herculian,
Heritage,Hermit,Hero,Heroine,Historic,Horns,Human-like,Hydra,Immortality,Incantation,Incarnation,Inherit,Inspiration,Interpretation,
Invader,Invention,Invincible,Iridescent,Jealousy,Juggernaut,Kill,Knowledge,Kraken,Labyrinth,Legend,Lethargy,Leviathan,Liaison,Lightning,
Lore,Love,Lycanthrope,Lyre,Magical,Martial,Meander,Mentor,Messenger,Monster,Mortal,Muse,Museum,Mysterious,Myth,Narcissism,Natural,
Nectar,Nemesis,Nymph,Odyssey,Olympian,Ominous,Original, Originate,Panacea,Passion,Perplex,Phenomenon,Pinnacle,Planets,Potion,Power,
Primitive,Prominent,Prophecy,Protection,Prowess,Psyche,Punishment,Pursuit,Quality,Quest,Reign,Representation,Revelation,Revelry,
Revenge,Ritual,Roc,Roman,Sanction,Satyr,Scared,Scepter,Sentry,Serpent,Significance,Siren,Speculation,Spirit,Stoic,Strength,Symbolic,
Tale,Tantalize,Tenacity,Theories,Thunder,Traditional,Treachery,Triad,Triumph,Underground,Underworld,Unexpected,Unicorn,Universe,
Values,Variation,Vigilant,Volcano,Voyage,Vulnerable,Warning,Warrior,Welch,Winged,Woodlands,Worship,Zealous,Zeus`
.split(',').map(word => word.trim());

sportsWordOptions = `Aggressive,Anger,Annihilated,Assaulted,Ball,Beaten,Blown,Burn,Challenged,Contained,Cost,Defeat,Defensive,
Deprived,Destroyed,Discourage,Fiasco,Fizzle,Gagged,Harassed,Hurt,Inactive,Jinxed,Misplay,Outmaneuvered,Outmatched,Overcome,
Pummeled,Quit,Realization,Regrettable,Restricted,Rout,Snatched,Sprain,Sorrow,Thwarted,Turning point,Unequipped,
Unlikely,Unprepared,Upset,Whipped,Worst,Zero,Ability,Active,Athlete,Attempt,Beach,Bike,Body,Breathless,Camaraderie,Champion,
Cheering,Coach,Collapse,Competition,Control,Coordination,Courage,Crash,Crowds,Diet,Disappointment,Discomfort,Distance,Doctor,
Drama,Drive,Encouragement,Endurance,Energy,Exemplary,Exhaustion,Finish,Fit,Flexibility,Glory,Gym,Heart,Hone,Hours,Incident,
Individual,Injury,International,Ironman,Jogging,Joy,Keen,Lead,Massage,Medication,Monitor,Muscles,National,Nausea,Nutrition,
Opportunity,Optimism,Outstanding,Participate,Perspire,Podium,Position,Potent,Practice,Preparation,Program,Promising,Protect,
Punishment,Quick,Recognition,Record,Recovery,Resilient,Risk,Roadway,Role,Routine,Running,Rush,Sand,Satisfaction,Season,Segment,
Sensible,Sit-ups,Solo,Sportsmanship,Stagger,Stamina,Statistics,Strain,Strategy,Strength,Stretch,Stride,Support,Sweat,Swim,Symptoms,
Target,Test,Thrill,Time,Tone,Torso,Trainer,Transformation,Treadmill,Tremor,Unbelievable,Unique,Unusual,Victory,Vitamins,Volunteers,
Walking,Warm up,Watchful,Water,Weights,Win,Wince,Wisdom,Yards,Zeal,Zest,Admiration,Advantage,All-star,Announcer,Appearance,
Attendance,Autographs,Average,Avoid,Awards,Balance,Blindside,Blockers,Boost,Broadcast,Brutal,Catches,Cheers,Collegiate,Commercials,
Conditioning,Conference,Confidence,Confrontation,Consecutive,Contract,Crowd,Crush,Daunting,Decision,Dedication,Diagram,Discipline,
Dispute,Division,Dominate,Dope,Draft,Electrifying,Eligible,Endorsement,Enshrine,Equipment,Excel,Exercise,Exhibition,Expansion,Fame,
Fans,Formation,Foul,Fracture,Frenzy,Fumble,Games,Gear,Goal,Grievous,Grit,Guard,Healthy,Hits,Hollering,Huddle,Impact,Improvement,
Inaugural,Incomplete,Industrious,Ineligible,Injuries,Instinctive,Instructions,Integrity,Interference,Intermission,Interview,Jeer,
Jerk,Joy,Kick,Leader,League,Limelight,Lockers,Maim,Manager,Match up,Maximize,Mayhem,Menace,Metabolic,Motivate,Negotiate,Nemesis,
Nimble,Noisy,Notoriety,Numbers,Offense,Official,Opponent,Organization,Ovation,Parallel,Passes,Passion,Pattern,Penalty,Percentage,
Performance,Perspective,Photos,Pick,Planning,Players,Playoffs,Popularity,Possession,Praise,Pressure,Prevention,Professional,Prohibited,
Publicity,Quarter,Quiver,Ranking,Recruit,Referee,Rehabilitation,Reserve,Retaliation,Revenue,Rival,Rough,Ruthless,Score,
Scout,Scrimmage,Sell out,Shift,Signal,Skill,Skirmish,Spectacle,Speed,Split-second,Squad,Standards,Steroids,Streak,Stress,Success,
Swagger,Sweep,Tackle,Teammate,Teamwork,Television,Threaten,Throw,Thwart,Tie,Timeout,Title,Top-rated,Toss,Traditional,Try out,Turnover,
Uniforms,Urgency,Variation,Velocity,Violent,Vulnerable,Waiver,Wind,Workout,X-rays,Yells,Youth,Zigzag,Zone`
.split(',').map(word => word.trim());

FANTASY = 'Fantasy';
SCIFI = 'Sci-Fi';
MYTH = 'Mythology';
SPORTS = 'Sports';
categories = [this.FANTASY, this.SCIFI, this.MYTH, this.SPORTS];
category = this.FANTASY;
wordOptionsByCategory = new Map();

constructor(){
  this.wordOptionsByCategory.set(this.FANTASY, this.fantasyWordOptions);
  this.wordOptionsByCategory.set(this.SCIFI, this.scifiWordOptions);
  this.wordOptionsByCategory.set(this.MYTH, this.mythologyWordOptions);
  this.wordOptionsByCategory.set(this.SPORTS, this.sportsWordOptions);
}

addWord(){
  const wordOptions = this.wordOptionsByCategory.get(this.category);
  let index = Math.floor(Math.random() * wordOptions.length);
  let word = wordOptions[index];
  while(this.words.filter(w => w.word === word).length){
    console.log('already there');
    index = Math.floor(Math.random() * wordOptions.length);
    word = wordOptions[index];
  }
  this.words.push({word, used: false});
}

begin(){
  for(let i = 0; i < 7; i++){
    this.addWord();
  }
}

restart(){
  this.words = [];
  this.begin();
}


}

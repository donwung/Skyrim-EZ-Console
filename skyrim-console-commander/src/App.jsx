import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Output from './components/output'
import OneSkill from './components/oneSkill'

function App() {
    const [count, setCount] = useState(0)

    // TODO: add perks
    // TODO: refactor and move the data to another file
    // TODO: test effects of multilevel perks
    // TODO: remember add names to perks 


    // NOTE: two tabs for schools, four tabs for perks, six tabs for perk RANK
    const [skills, setSkills] = useState({
        // mage skills
        "alteration": {
            "name": "Alteration",
            "technicalName": "alteration",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Alteration": {
                    "description": "Cast Novice level Alteration spells for half magicka.",
                    "ID": "000f2ca6",
                    "selected": false,
                },
                "Alteration Dual Casting": {
                    "description": "Dual casting an Alteration spell overcharges the effects into an even more powerful version.��",
                    "ID": "000153cd",
                    "selected": false,
                },
                "Apprentice Alteration": {
                    "description": "Cast Apprentice level Alteration spells for half magicka.",
                    "ID": "000c44b7",
                    "selected": false,
                },
                "Magic Resistance": {
                    "rank": {
                        "1": {
                            "description": "Blocks 10% of a spell's effects.",
                            "ID": "00053128",
                            "selected": false,
                        },
                        "2": {
                            "description": "Blocks 20% of a spell's effects.",
                            "ID": "00053129",
                            "selected": false,
                        },
                        "3": {
                            "description": "Blocks 30% of a spell's effects.",
                            "ID": "0005312a",
                            "selected": false,
                        }
                    },
                },
                "Adept Alteration": {
                    "description": "Cast Adept level Alteration spells for half magicka.",
                    "ID": "000c44b8",
                    "selected": false,
                },
                "Expert Alteration": {
                    "description": "Cast Expert level Alteration spells for half magicka.",
                    "ID": "000c44b9",
                    "selected": false,
                },
                "Atronach": {
                    "description": "Absorb 30% of the magicka of any spells that hit you.",
                    "ID": "000581f7",
                    "selected": false,
                },
                "Master Alteration": {
                    "description": "Cast Master level Alteration spells for half magicka.",
                    "ID": "000c44ba",
                    "selected": false,
                },
                "Stability": {
                    "description": "Alteration spells have 50% greater duration.��",
                    "ID": "000581fc",
                    "selected": false,
                },
                "Mage Armor": {
                    "rank": {
                        "1": {
                            "description": "Protection spells like Stoneflesh are twice as strong if not wearing armor.",
                            "ID": "000d7999",
                            "selected": false,
                        },
                        "2": {
                            "description": "Protection spells like Stoneflesh are 2.5 times as strong if not wearing armor.",
                            "ID": "000d799a",
                            "selected": false,
                        },
                        "3": {
                            "description": "Protection spells like Stoneflesh are three times as strong if not wearing armor.",
                            "ID": "000d799b",
                            "selected": false,
                        }
                    },
                },
            }
        },
        "conjuration": {
            "name": "Conjuration",
            "technicalName": "conjuration",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Conjuration": {
                    "description": "Cast Novice level Conjuration spells for half magicka.",
                    "ID": "000f2ca7",
                    "selected": false,
                },
                "Apprentice Conjuration": {
                    "description": "Cast Apprentice level Conjuration spells for half magicka.",
                    "ID": "000c44bb",
                    "selected": false,
                },
                "Adept Conjuration": {
                    "description": "Cast Adept level Conjuration spells for half magicka.",
                    "ID": "000c44bc",
                    "selected": false,
                },
                "Expert Conjuration": {
                    "description": "Cast Expert level Conjuration spells for half magicka.",
                    "ID": "000c44bd",
                    "selected": false,
                },
                "Master Conjuration": {
                    "description": "Cast Master level Conjuration spells for half magicka.",
                    "ID": "000c44be",
                    "selected": false,
                },
                "Conjuration Dual Casting": {
                    "description": "Dual casting a Conjuration spell overcharges the spell, allowing it to last longer.",
                    "ID": "000153ce",
                    "selected": false,
                },
                "Mystic Binding": {
                    "description": "Bound weapons do more damage.",
                    "ID": "000640b3",
                    "selected": false,
                },
                "Soul Stealer": {
                    "description": "Bound weapons cast Soul Trap on targets.",
                    "ID": "000d799e",
                    "selected": false,
                },
                "Oblivion Binding": {
                    "description": "Bound weapons will banish summoned creatures and turn raised ones.",
                    "ID": "000d799c",
                    "selected": false,
                },
                "Necromancy": {
                    "description": "Greater duration for reanimated undead.",
                    "ID": "000581dd",
                    "selected": false,
                },
                "Dark Souls": {
                    "ID": "000581de",
                    "selected": false,
                },
                "Summoner": {
                    "rank": {
                        "1": {
                            "description": "Can summon atronachs or raise undead twice as far away.[2]",
                            "ID": "00105f30",
                            "selected": false,
                        },
                        "2": {
                            "description": "Can summon atronachs or raise undead three times as far away.[2]",
                            "ID": "00105f31",
                            "selected": false,
                        }
                    }
                },
                "Atromancy": {
                    "description": "Double duration for conjured Atronachs.[2]",
                    "ID": "000cb419",
                    "selected": false,
                },
                "Elemental Potency": {
                    "description": "Conjured Atronachs are 50% more powerful.",
                    "ID": "000cb41a",
                    "selected": false,
                },
                "Twin Souls": {
                    "description": "You can have two atronachs or reanimated zombies.[2]",
                    "ID": "000d5f1c",
                    "selected": false,
                },
            }

        },
        "destruction": {
            "name": "Destruction",
            "technicalName": "destruction",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Destruction": {
                    "description": "Cast Novice level Destruction spells for half magicka.",
                    "ID": "000f2ca8",
                    "selected": false,
                },
                "Apprentice Destruction": {
                    "description": "Cast Apprentice level Destruction spells for half magicka.",
                    "ID": "000c44bf",
                    "selected": false,
                },
                "Adept Destruction": {
                    "description": "Cast Adept level Destruction spells for half magicka.",
                    "ID": "000c44c0",
                    "selected": false,
                },
                "Expert Destruction": {
                    "description": "Cast Expert level Destruction spells for half magicka.",
                    "ID": "000c44c1",
                    "selected": false,
                },
                "Master Destruction": {
                    "description": "Cast Master level Destruction spells for half magicka.",
                    "ID": "000c44c2",
                    "selected": false,
                },
                "Rune Master": {
                    "description": "Can place runes five times farther away.",
                    "ID": "00105f32",
                    "selected": false,
                },
                "Augmented Flames": {
                    "rank": {
                        "1": {
                            "description": "Fire spells do 25% more damage.",
                            "ID": "000581e7",
                            "selected": false,
                        },
                        "2": {
                            "description": "Fire spells do 50% more damage.",
                            "ID": "0010fcf8",
                            "selected": false,
                        },
                    }
                },
                "Intense Flames": {
                    "description": "Fire damage causes targets to flee if their health is low (under 20%).",
                    "ID": "000f392e",
                    "selected": false,
                },
                "Augmented Frost": {
                    "rank": {
                        "1": {
                            "description": "Frost spells do 25% more damage.",
                            "ID": "000581ea",
                            "selected": false,
                        },
                        "2": {
                            "description": "Frost spells do 50% more damage.",
                            "ID": "0010fcf9",
                            "selected": false,
                        },
                    },
                },
                "Deep Freeze": {
                    "description": "Frost damage paralyzes targets if their health is low (under 20%).�",
                    "ID": "000f3933",
                    "selected": false,
                },
                "Augmented Shock": {
                    "rank": {
                        "1": {
                            "description": "Shock spells do 25% more damage.",
                            "ID": "00058200",
                            "selected": false,
                        },
                        "2": {
                            "description": "Shock spells do 50% more damage.",
                            "ID": "0010fcfa",
                            "selected": false,
                        }
                    },
                },
                "Disintegrate": {
                    "description": "Shock spells disintegrate targets if their health is low (under 15%).",
                    "ID": "000f3f0e",
                    "selected": false,
                },
                "Destruction Dual Casting": {
                    "description": "Dual casting a Destruction spell overcharges the effects into an even more powerful version.",
                    "ID": "000153cf",
                    "selected": false,
                },
                "Impact": {
                    "description": "Most destruction spells will stagger an opponent when dual cast.",
                    "ID": "000153d2",
                    "selected": false,
                },
            }
        },
        "enchanting": {
            "name": "Enchanting",
            "technicalName": "enchanting",
            "level": 0,
            "selected": false,
            "perks": {
                "Enchanter": {
                    "rank": {
                        "1": {
                            "description": "New enchantments are 20% stronger.",
                            "ID": "000bee97",
                            "selected": false,
                        },
                        "2": {
                            "description": "New enchantments are 40% stronger.",
                            "ID": "000c367c",
                            "selected": false,
                        },
                        "3": {
                            "description": "New enchantments are 60% stronger.",
                            "ID": "000c367d",
                            "selected": false,
                        },
                        "4": {
                            "description": "New enchantments are 80% stronger.",
                            "ID": "000c367e",
                            "selected": false,
                        },
                        "5": {
                            "description": "New enchantments are 100% stronger.",
                            "ID": "000c367f",
                            "selected": false,
                        },
                    },
                },
                "Fire Enchanter": {
                    "description": "Fire enchantments on weapons and armor are 25% stronger.[1]",
                    "ID": "00058f80",
                    "selected": false,
                },
                "Frost Enchanter": {
                    "description": "Frost enchantments on weapons and armor are 25% stronger.[1]",
                    "ID": "00058f81",
                    "selected": false,
                },
                "Storm Enchanter": {
                    "description": "Shock enchantments on weapons and armor are 25% stronger.[1]",
                    "ID": "00058f82",
                    "selected": false,
                },
                "Insightful Enchanter": {
                    "description": "Skill enchantments on armor are 25% stronger.[1]",
                    "ID": "00058f7e",
                    "selected": false,
                },
                "Corpus Enchanter": {
                    "description": "Health, magicka, and stamina enchantments on armor are 25% stronger.[1][2]",
                    "ID": "00058f7d",
                    "selected": false,
                },
                "Extra Effect": {
                    "description": "Can put two enchantments on the same item.[3]",
                    "ID": "00058f7f",
                    "selected": false,
                },
                "Soul Squeezer": {
                    "description": "Soul gems provide extra magicka for recharging.[4]",
                    "ID": "00058f7c",
                    "selected": false,
                },
                "Soul Siphon": {
                    "description": "Death blows to creatures, but not people, trap 5% of the victim's soul, recharging the weapon.[5]",
                    "ID": "00108a44",
                    "selected": false,
                },
            },
        },
        "illusion": {
            "name": "Illusion",
            "technicalName": "illusion",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Illusion": {
                    "description": "Cast Novice level Illusion spells for half magicka.",
                    "ID": "000f2ca9",
                    "selected": false,
                },
                "Animage": {
                    "description": "Illusion spells now work on higher level animals��.",
                    "ID": "000581e1",
                    "selected": false,
                },
                "Kindred Mage": {
                    "description": "All Illusion spells work on higher level people��.",
                    "ID": "000581e2",
                    "selected": false,
                },
                "Quiet Casting": {
                    "description": "All spells you cast from any school of magic are silent to others.",
                    "ID": "000581fd",
                    "selected": false,
                },
                "Apprentice Illusion": {
                    "description": "Cast Apprentice level Illusion spells for half magicka.",
                    "ID": "000c44c3",
                    "selected": false,
                },
                "Adept Illusion": {
                    "description": "Cast Adept level Illusion spells for half magicka.",
                    "ID": "000c44c4",
                    "selected": false,
                },
                "Expert Illusion": {
                    "description": "Cast Expert level Illusion spells for half magicka.",
                    "ID": "000c44c5",
                    "selected": false,
                },
                "Master Illusion": {
                    "description": "Cast Master level Illusion spells for half magicka.",
                    "ID": "000c44c6",
                    "selected": false,
                },
                "Hypnotic Gaze": {
                    "description": "Calm spells now work on higher level opponents. Cumulative with Kindred Mage and Animage.",
                    "ID": "00059b77",
                    "selected": false,
                },
                "Aspect of Terror": {
                    "description": "Fear spells work on higher level opponents. Cumulative with Kindred Mage and Animage.",
                    "ID": "00059b78",
                    "selected": false,
                },
                "Rage": {
                    "description": "Frenzy spells work on higher level opponents. Cumulative with Kindred Mage and Animage.",
                    "ID": "000c44b5",
                    "selected": false,
                },
                "Master of the Mind": {
                    "description": "Illusion spells work on undead��, daedra, and automatons.",
                    "ID": "00059b76",
                    "selected": false,
                },
                "Illusion Dual Casting": {
                    "description": "Dual casting an Illusion spell overcharges the effects into an even more powerful version.",
                    "ID": "000153d0",
                    "selected": false,
                },
            },
        },
        "restoration": {
            "name": "Restoration",
            "technicalName": "restoration",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Restoration": {
                    "description": "Cast Novice level Restoration spells for half magicka.",
                    "ID": "000f2caa",
                    "selected": false,
                },
                "Apprentice Restoration": {
                    "description": "Cast Apprentice level Restoration spells for half magicka.",
                    "ID": "000c44c7",
                    "selected": false,
                },
                "Adept Restoration": {
                    "description": "Cast Adept level Restoration spells for half magicka.",
                    "ID": "000c44c8",
                    "selected": false,
                },
                "Expert Restoration": {
                    "description": "Cast Expert level Restoration spells for half magicka.",
                    "ID": "000c44c9",
                    "selected": false,
                },
                "Master Restoration": {
                    "description": "Cast Master level Restoration spells for half magicka.",
                    "ID": "000c44ca",
                    "selected": false,
                },
                "Recovery": {
                    "rank": {
                        "1": {
                            "description": "Magicka regenerates 25% faster.",
                            "ID": "000581f4",
                            "selected": false,
                        },
                        "2": {
                            "description": "Magicka regenerates 50% faster.",
                            "ID": "000581f5",
                            "selected": false,
                        },
                    },
                },
                "Avoid Death": {
                    "ID": "000a3f64",
                    "selected": false,
                },
                "Regeneration": {
                    "description": "Healing spells cure 50% more.",
                    "ID": "000581f8",
                    "selected": false,
                },
                "Necromage": {
                    "description": "All spells are more effective against undead. (+25% effect and +50% effect duration)",
                    "ID": "000581e4",
                    "selected": false,
                },
                "Respite": {
                    "description": "Healing spells also restore Stamina.",
                    "ID": "000581f9",
                    "selected": false,
                },
                "Restoration Dual Casting": {
                    "description": "Dual casting a Restoration spell overcharges the effects into an even more powerful version. (220% spell effect for 280% magicka cost)",
                    "ID": "000153d1",
                    "selected": false,
                },
                "Ward Absorb": {
                    "description": "Wards recharge your magicka when hit with spells.",
                    "ID": "00068bcc",
                    "selected": false,
                },
            },
        },
        // thief skills
        "archery": {
            "name": "Archery",
            "technicalName": "marksman",
            "level": 0,
            "selected": false,
            "perks": {
                "overdraw": {
                    "name": "Overdraw",
                    "rank": {
                        "1": {
                            "description": "Bows do 20 % more damage.",
                            "ID": "000babed",
                            "selected": false,
                        },
                        "2": {
                            "description": "Bows do 40 % more damage.",
                            "ID": "0007934a",
                            "selected": false,
                        },
                        "3": {
                            "description": "Bows do 60 % more damage.",
                            "ID": "0007934b",
                            "selected": false,
                        },
                        "4": {
                            "description": "Bows do 80 % more damage.",
                            "ID": "0007934d",
                            "selected": false,
                        },
                        "5": {
                            "description": "Bows do twice as much damage.",
                            "ID": "00079354",
                            "selected": false,
                        }
                    }
                },
                "criticalShot": {
                    "rank": {
                        "1": {
                            "description": "10% chance of a critical hit that does extra damage.",
                            "ID": "00105f1c",
                            "selected": false,
                        },
                        "2": {
                            "description": "15% chance of a critical hit that does 25% more critical damage.",
                            "ID": "00105f1e",
                            "selected": false,
                        }
                    },
                },
                "huntersDiscipline": {
                    "rank": {
                        "1": {
                            "description": "Recover twice as many arrows from dead bodies.",
                            "ID": "00051b12",
                            "selected": false,
                        }
                    }
                },
                "ranger": {
                    "rank": {
                        "1": {
                            "description": "Able to move faster with a drawn bow.",
                            "ID": "00058f63",
                            "selected": false,
                        }
                    }
                },
                "eagleEye": {
                    "description": "Pressing Block while aiming will zoom in your view.",
                    "ID": "00058f61",
                    "selected": false,
                },
                "powerShot": {
                    "description": "Arrows stagger all but the largest opponents 50% of the time.",
                    "ID": "00058f62",
                    "selected": false,
                },
                "quickShot": {
                    "description": "Can draw a bow 30% faster.",
                    "ID": "00105f19",
                    "selected": false,
                },
                "steadyHand": {
                    "rank": {
                        "1": {
                            "description": "Zooming in with a bow slows time by 25%.",
                            "ID": "00103ada",
                            "selected": false,
                        },
                        "2": {
                            "description": "Zooming in with a bow slows time by 50%.",
                            "ID": "00103adb",
                            "selected": false,
                        }
                    }
                },
                "bullseye": {
                    "description": "15% chance of paralyzing the target for a few seconds.",
                    "ID": "00058f64",
                    "selected": false,
                }
            }
        },
        "alchemy": {
            "name": "Alchemy",
            "technicalName": "alchemy",
            "level": 0,
            "selected": false,
            "perks": {
                "Alchemist": {
                    "rank": {
                        "1": {
                            "description": "Potions and poisons you make are 20% stronger.",
                            "ID": "000be127",
                            "selected": false,
                        },
                        "2": {
                            "description": "Potions and poisons you make are 40% stronger.",
                            "ID": "000c07ca",
                            "selected": false,
                        },
                        "3": {
                            "description": "Potions and poisons you make are 60% stronger.",
                            "ID": "000c07cb",
                            "selected": false,
                        },
                        "4": {
                            "description": "Potions and poisons you make are 80% stronger.",
                            "ID": "000c07cc",
                            "selected": false,
                        },
                        "5": {
                            "description": "Potions and poisons you make are twice as strong.",
                            "ID": "000c07cd",
                            "selected": false,
                        }
                    }
                },
                "Physician": {
                    "description": "Potions you mix that restore Health, Magicka or Stamina are 25% more powerful.",
                    "ID": "00058215",
                    "selected": false,
                },
                "Benefactor": {
                    "description": "Potions you mix with beneficial effects have an additional 25% greater magnitude.",
                    "ID": "00058216",
                    "selected": false,
                },
                "Experimenter": {
                    "1": {
                        "description": "Eating an ingredient reveals first two effects.",
                        "ID": "00058218",
                        "selected": false,
                    },
                    "2": {
                        "description": "Eating an ingredient reveals first three effects.",
                        "ID": "00105f2a",
                        "selected": false,
                    },
                    "3": {
                        "description": "Eating an ingredient reveals all its effects.",
                        "ID": "00105f2b",
                        "selected": false,
                    }
                },
                "Poisoner": {
                    "description": "Poisons you mix are 25% more effective.",
                    "ID": "00058217",
                    "selected": false,
                },
                "Concentrated Poison": {
                    "description": "Poisons applied to weapons last for twice as many hits.",
                    "ID": "00105f2f",
                    "selected": false,
                },
                "Green Thumb": {
                    "description": "Two ingredients are gathered from plants.�",
                    "ID": "00105f2e",
                    "selected": false,
                },
                "Snakeblood": {
                    "description": "50% resistance to all poisons.",
                    "ID": "00105f2c",
                    "selected": false,
                },
                "Purity": {
                    "description": "All negative effects are removed from created potions, and all positive effects are removed from created poisons.",
                    "ID": "0005821d",
                    "selected": false,
                },
            },
        },
        "lightarmor": {
            "name": "Light Armor",
            "technicalName": "lightarmor",
            "level": 0,
            "selected": false,
            "perks": {
                "Agile Defender": {
                    "rank": {
                        "1": {
                            "description": "Increase armor rating for Light armor by 20%.[1]",
                            "ID": "000be123",
                            "selected": false,
                        },
                        "2": {
                            "description": "Increase armor rating for Light armor by 40%.[1]",
                            "ID": "00079376",
                            "selected": false,
                        },
                        "3": {
                            "description": "Increase armor rating for Light armor by 60%.[1]",
                            "ID": "00079389",
                            "selected": false,
                        },
                        "4": {
                            "description": "Increase armor rating for Light armor by 80%.[1]",
                            "ID": "00079391",
                            "selected": false,
                        },
                        "5": {
                            "description": "Increase armor rating for Light armor by 100%.[1]",
                            "ID": "00079392",
                            "selected": false,
                        },
                    },
                },
                "Custom Fit": {
                    "description": "25% Armor bonus if wearing all Light Armor: head, chest, hands, feet.[2]",
                    "ID": "00051b1b",
                    "selected": false,
                },
                "Matching Set": {
                    "description": "Additional 25% Armor bonus if wearing a matched set[3] of Light Armor.",
                    "ID": "00051b17",
                    "selected": false,
                },
                "Unhindered": {
                    "description": "Light Armor weighs nothing and doesn't slow you down when worn.[1]",
                    "ID": "00051b1c",
                    "selected": false,
                },
                "Wind Walker": {
                    "description": "Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet.[2]",
                    "ID": "00105f22",
                    "selected": false,
                },
                "Deft Movement": {
                    "description": "10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet.[2][4]",
                    "ID": "00107831",
                    "selected": false,
                },
            },
        },
        "lockpicking": {
            "name": "Lockpicking",
            "technicalName": "lockpicking",
            "level": 0,
            "selected": false,
            "perks": {
                "Novice Locks": {
                    "description": "Novice locks are much easier to pick.",
                    "ID": "000f392a",
                    "selected": false,
                },
                "Apprentice Locks": {
                    "description": "Apprentice locks are much easier to pick.",
                    "ID": "000be125",
                    "selected": false,
                },
                "Quick Hands": {
                    "description": "Able to pick locks without being noticed.",
                    "ID": "00106259",
                    "selected": false,
                },
                "Wax Key": {
                    "description": "Automatically gives you a copy of a picked lock's key if it has one.",
                    "ID": "00107830",
                    "selected": false,
                },
                "Adept Locks": {
                    "description": "Adept locks are much easier to pick.",
                    "ID": "000c3680",
                    "selected": false,
                },
                "Expert Locks": {
                    "description": "Expert locks are much easier to pick.",
                    "ID": "000c3681",
                    "selected": false,
                },
                "Golden Touch": {
                    "description": "Find more gold in chests.�",
                    "ID": "0005820a",
                    "selected": false,
                },
                "Treasure Hunter": {
                    "description": "50% greater chance of finding special treasure.�",
                    "ID": "00105f26",
                    "selected": false,
                },
                "Locksmith": {
                    "description": "Pick starts close to the lock opening position.",
                    "ID": "00058208",
                    "selected": false,
                },
                "Unbreakable": {
                    "description": "Lockpicks never break.",
                    "ID": "00058209",
                    "selected": false,
                },
                "Master Locks": {
                    "description": "Master locks are much easier to pick.",
                    "ID": "000c3682",
                    "selected": false,
                },
            }
        },
        "pickpocket": {
            "name": "Pickpocket",
            "technicalName": "pickpocket",
            "level": 0,
            "selected": false,
            "perks": {
                "Light Fingers": {
                    "rank": {
                        "1": {
                            "description": "Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds.",
                            "ID": "000be124",
                            "selected": false,
                        },
                        "2": {
                            "description": "Pickpocketing bonus of 40%. Item weight and value reduce pickpocketing odds.",
                            "ID": "00018e6a",
                            "selected": false,
                        },
                        "3": {
                            "description": "Pickpocketing bonus of 60%. Item weight and value reduce pickpocketing odds.",
                            "ID": "00018e6b",
                            "selected": false,
                        },
                        "4": {
                            "description": "Pickpocketing bonus of 80%. Item weight and value reduce pickpocketing odds.",
                            "ID": "00018e6c",
                            "selected": false,
                        },
                        "5": {
                            "description": "Pickpocketing bonus of 100%. Item weight and value reduce pickpocketing odds.",
                            "ID": "00018e6d",
                            "selected": false,
                        },
                    },
                },
                "Night Thief": {
                    "description": "+25% chance to pickpocket if the target is asleep.",
                    "ID": "00058202",
                    "selected": false,
                },
                "Cutpurse": {
                    "description": "Pickpocketing gold is 50% easier.",
                    "ID": "00058204",
                    "selected": false,
                },
                "Keymaster": {
                    "description": "Pickpocketing keys almost always works.",
                    "ID": "000d79a0",
                    "selected": false,
                },
                "Misdirection": {
                    "description": "Can pickpocket equipped weapons.",
                    "ID": "00058201",
                    "selected": false,
                },
                "Perfect Touch": {
                    "description": "Can pickpocket equipped items.",
                    "ID": "00058205",
                    "selected": false,
                },
                "Extra Pockets": {
                    "description": "Carrying capacity is increased by 100.",
                    "ID": "00096590",
                    "selected": false,
                },
                "Poisoned":
                {
                    "description": "Silently harm enemies by placing poisons in their pockets.",
                    "ID": "00105f28",
                    "selected": false,
                },
            },
        },
        "sneak": {
            "name": "Sneak",
            "technicalName": "sneak",
            "level": 0,
            "selected": false,
            "perks": {
                "Stealth": {
                    "rank": {
                        "1": {
                            "description": "You are 20% harder to detect when sneaking.",
                            "ID": "000be126",
                            "selected": false,
                        },
                        "2": {
                            "description": "You are 25% harder to detect when sneaking.",
                            "ID": "000c07c6",
                            "selected": false,
                        },
                        "3": {
                            "description": "You are 30% harder to detect when sneaking.",
                            "ID": "000c07c7",
                            "selected": false,
                        },
                        "4": {
                            "description": "You are 35% harder to detect when sneaking.",
                            "ID": "000c07c8",
                            "selected": false,
                        },
                        "5": {
                            "description": "You are 40% harder to detect when sneaking.",
                            "ID": "000c07c9",
                            "selected": false,
                        },
                    },
                },
                "Backstab": {
                    "description": "Sneak attacks with one-handed weapons now do six times damage.",
                    "ID": "00058210",
                    "selected": false,
                },
                "Deadly Aim": {
                    "description": "Sneak attacks with bows now do three times damage.",
                    "ID": "001036f0",
                    "selected": false,
                },
                "Assassin's Blade": {
                    "description": "Sneak attacks with daggers now do a total of fifteen times normal damage.",
                    "ID": "00058211",
                    "selected": false,
                },
                "Muffled Movement": {
                    "description": "Wearing armor makes half as much noise when you move (see muffle).",
                    "ID": "00058213",
                    "selected": false,
                },
                "Light Foot": {
                    "description": "You won't trigger pressure plates.�",
                    "ID": "0005820c",
                    "selected": false,
                },
                "Silent Roll": {
                    "description": "Sprinting while sneaking executes a silent forward roll.",
                    "ID": "00105f23",
                    "selected": false,
                },
                "Silence": {
                    "description": "Walking and running does not affect detection.",
                    "ID": "00105f24",
                    "selected": false,
                },
                "Shadow Warrior": {
                    "description": "Crouching stops combat for a moment and forces distant opponents to search for a target.",
                    "00058214": {
                    }
                },
            },
        },
        "speech": {
            "name": "Speech",
            "technicalName": "speechcraft",
            "level": 0,
            "selected": false,
            "perks": {
                "Haggling": {
                    "rank": {
                        "1": {
                            "description": "Buying and selling prices are 10% better.",
                            "ID": "000be128",
                            "selected": false,
                        },
                        "2": {
                            "description": "Buying and selling prices are 15% better.",
                            "ID": "000c07ce",
                            "selected": false,
                        },
                        "3": {
                            "description": "Buying and selling prices are 20% better.",
                            "ID": "000c07cf",
                            "selected": false,
                        },
                        "4": {
                            "description": "Buying and selling prices are 25% better.",
                            "ID": "000c07d0",
                            "selected": false,
                        },
                        "5": {
                            "description": "Buying and selling prices are 30% better.",
                            "ID": "000c07d1",
                            "selected": false,
                        },
                    },
                },
                "Allure": {
                    "description": "10% better prices with the opposite sex.",
                    "ID": "00058f75",
                    "selected": false,
                },
                "Merchant": {
                    "description": "Can sell any type of item to any kind of merchant.�",
                    "ID": "00058f7a",
                    "selected": false,
                },
                "Investor": {
                    "description": "Can invest 500 gold with a shopkeeper to increase his available gold permanently.",
                    "ID": "00058f7b",
                    "selected": false,
                },
                "Fence": {
                    "description": "Can barter stolen goods with any merchant you have invested in.",
                    "ID": "00058f79",
                    "selected": false,
                },
                "Master Trader": {
                    "description": "Every merchant in the world gains 1000 gold for bartering.",
                    "ID": "001090a5",
                    "selected": false,
                },
                "Bribery": {
                    "description": "Can bribe guards to ignore crimes.",
                    "ID": "00058f72",
                    "selected": false,
                },
                "Persuasion": {
                    "description": "Persuasion attempts are 30% easier.",
                    "ID": "001090a2",
                    "selected": false,
                },
                "Intimidation": {
                    "description": "Intimidation is twice as likely to be successful.",
                    "ID": "00105f29",
                    "selected": false,
                },
            },
        },
        // warrior skills
        "block": {
            "name": "Block",
            "technicalName": "block",
            "level": 0,
            "selected": false,
            "perks": {
                "Shield Wall": {
                    "rank": {
                        "1": {
                            "description": "Blocking is 20% more effective. (Actually 10%)��",
                            "ID": "000bccae",
                            "selected": false,
                        },
                        "2": {
                            "description": "Blocking is 25% more effective. (Actually 20%)��",
                            "ID": "00079355",
                            "selected": false,
                        },
                        "3": {
                            "description": "Blocking is 30% more effective.",
                            "ID": "00079356",
                            "selected": false,
                        },
                        "4": {
                            "description": "Blocking is 35% more effective. (Actually 40%)��",
                            "ID": "00079357",
                            "selected": false,
                        },
                        "5": {
                            "description": "Blocking is 40% more effective. (Actually 50%)��",
                            "ID": "00079358",
                            "selected": false,
                        },
                    },
                },
                "Deflect Arrows �": {
                    "description": "Arrows that hit the shield do no damage.��",
                    "ID": "00058f68",
                    "selected": false,
                },
                "Elemental Protection �": {
                    "description": "Blocking with a shield reduces incoming fire, frost, and shock damage by 50%.",
                    "ID": "00058f69",
                    "selected": false,
                },
                "Block Runner �": {
                    "description": "Able to move faster with a shield or weapon raised.��",
                    "ID": "00106253",
                    "selected": false,
                },
                "Power Bash �": {
                    "description": "Able to do a power bash.",
                    "ID": "00058f67",
                    "selected": false,
                },
                "Deadly Bash �": {
                    "description": "Bashing does five times more damage.",
                    "ID": "0005f594",
                    "selected": false,
                },
                "Disarming Bash �": {
                    "description": "Chance to disarm when power bashing. (50% chance)��",
                    "ID": "00058f66",
                    "selected": false,
                },
                "Shield Charge �": {
                    "description": "Sprinting with a shield raised knocks down most targets.��",
                    "ID": "00058f6a",
                    "selected": false,
                },
                "Quick Reflexes �": {
                    "description": "Time slows down if you are blocking during an enemy's power attack.��",
                    "ID": "000d8c33",
                    "selected": false,
                },
            }
        },
        "heavyarmor": {
            "name": "Heavy Armor",
            "technicalName": "heavyarmor",
            "level": 0,
            "selected": false,
            "perks": {
                "Juggernaut": {
                    "ranks": {
                        "1": {
                            "description": "Increases armor rating for Heavy Armor by 20%.[1]",
                            "ID": "000bcd2a",
                            "selected": false,
                        },
                        "2": {
                            "description": "Increases armor rating for Heavy Armor by 40%.[1]",
                            "ID": "0007935e",
                            "selected": false,
                        },
                        "3": {
                            "description": "Increases armor rating for Heavy Armor by 60%.[1]",
                            "ID": "00079361",
                            "selected": false,
                        },
                        "4": {
                            "description": "Increases armor rating for Heavy Armor by 80%.[1]",
                            "ID": "00079362",
                            "selected": false,
                        },
                        "5": {
                            "description": "Increases armor rating for Heavy Armor by 100%.[1]",
                            "ID": "00079374",
                            "selected": false,
                        },
                    },
                },
                "Fists of Steel": {
                    "description": "Unarmed attacks with Heavy Armor gauntlets do their armor rating in extra damage.",
                    "ID": "00058f6e",
                    "selected": false,
                },
                "Cushioned": {
                    "description": "Half damage from falling if wearing all Heavy Armor: head, chest, hands, feet.[2]",
                    "ID": "000bcd2b",
                    "selected": false,
                },
                "Conditioning": {
                    "description": "Heavy Armor weighs nothing and doesn't slow you down when worn.[1]",
                    "ID": "00058f6d",
                    "selected": false,
                },
                "Well Fitted": {
                    "description": "25% Armor bonus if wearing all Heavy Armor: head, chest, hands, feet.[2]",
                    "ID": "00058f6f",
                    "selected": false,
                },
                "Tower of Strength": {
                    "description": "50% less stagger when wearing only Heavy Armor.[2]",
                    "ID": "00058f6c",
                    "selected": false,
                },
                "Matching Set": {
                    "description": "Additional 25% Armor bonus if wearing a matched set[3] of Heavy Armor.",
                    "ID": "00107832",
                    "selected": false,
                },
                "Reflect Blows": {
                    "description": "10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor: head, chest, hands, feet.[2]",
                    "ID": "00105f33",
                    "selected": false,
                },
            },
        },
        "onehanded": {
            "name": "One Handed",
            "technicalName": "onehanded",
            "level": 0,
            "selected": false,
            "perks": {
                "Armsman": {
                    "rank": {
                        "1": {
                            "description": "One-Handed weapons do 20% more damage.",
                            "ID": "000babe4",
                            "selected": false,
                        },
                        "2": {
                            "description": "One-Handed weapons do 40% more damage.",
                            "ID": "00079343",
                            "selected": false,
                        },
                        "3": {
                            "description": "One-Handed weapons do 60% more damage.",
                            "ID": "00079342",
                            "selected": false,
                        },
                        "4": {
                            "description": "One-Handed weapons do 80% more damage.",
                            "ID": "00079344",
                            "selected": false,
                        },
                        "5": {
                            "description": "One-Handed weapons do twice as much damage.",
                            "ID": "00079345",
                            "selected": false,
                        },
                    },
                },
                "Bladesman": {
                    "rank": {
                        "1": {
                            "description": "Attacks with swords have a 10% chance of doing critical damage (+0% crit damage)*.",
                            "ID": "0005f56f",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with swords have a 15% chance of doing more critical damage (+25% crit damage)*.",
                            "ID": "000c1e90",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with swords have a 20% chance of doing even more critical damage (+50% crit damage)*.",
                            "ID": "000c1e91",
                            "selected": false,
                        },
                    },
                },
                "Bone Breaker": {
                    "rank": {
                        "1": {
                            "description": "Attacks with maces ignore 25% of armor.",
                            "ID": "0005f592",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with maces ignore 50% of armor.",
                            "ID": "000c1e92",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with maces ignore 75% of armor.",
                            "ID": "000c1e93",
                            "selected": false,
                        },
                    },
                },
                "Dual Flurry": {
                    "rank": {
                        "1": {
                            "description": "Dual wielding attacks are 20% faster.**",
                            "ID": "00106256",
                            "selected": false,
                        },
                        "2": {
                            "description": "Dual wielding attacks are 35% faster.**",
                            "ID": "00106257",
                            "selected": false,
                        },
                    },
                },
                "Dual Savagery": {
                    "description": "Dual wielding power attacks do 50% bonus damage.**",
                    "ID": "00106258",
                    "selected": false,
                },
                "Fighting Stance": {
                    "description": "Power attacks with one-handed weapons cost 25% less stamina.",
                    "ID": "00052d50",
                    "selected": false,
                },
                "Critical Charge": {
                    "description": "Can do a one-handed power attack while sprinting that does double critical damage.",
                    "ID": "000cb406",
                    "selected": false,
                },
                "Savage Strike": {
                    "description": "Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.",
                    "ID": "0003af81",
                    "selected": false,
                },
                "Paralyzing Strike": {
                    "description": "Backwards power attack has a 25%*** chance to paralyze the target.",
                    "ID": "0003afa6",
                    "selected": false,
                },
                "Hack and Slash": {
                    "rank": {
                        "1": {
                            "description": "Attacks with war axes cause extra bleeding damage.",
                            "ID": "0003fffa",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with war axes cause more bleeding damage.",
                            "ID": "000c3678",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with war axes cause even more bleeding damage.",
                            "ID": "000c3679",
                            "selected": false,
                        },
                    }
                },
            },
        },
        "smithing": {
            "name": "Smithing",
            "technicalName": "smithing",
            "level": 0,
            "selected": false,
            "perks": {
                "Steel Smithing": {
                    "description": "Can create Steel armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb40d",
                    "selected": false,
                },
                "Arcane Blacksmith": {
                    "description": "You can improve magical weapons and armor.",
                    "ID": "0005218e",
                    "selected": false,
                },
                "Dwarven Smithing": {
                    "description": "Can create Dwarven armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb40e",
                    "selected": false,
                },
                "Orcish Smithing": {
                    "description": "Can create Orcish armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb410",
                    "selected": false,
                },
                "Ebony Smithing": {
                    "description": "Can create Ebony armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb412",
                    "selected": false,
                },
                "Daedric Smithing": {
                    "description": "Can create Daedric armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb413",
                    "selected": false,
                },
                "Elven Smithing": {
                    "description": "Can create Elven armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb40f",
                    "selected": false,
                },
                "Advanced Armors": {
                    "description": "Can create Scaled and Plate armor at forges, and improve them twice as much.",
                    "ID": "000cb414",
                    "selected": false,
                },
                "Glass Smithing": {
                    "description": "Can create Glass armor and weapons at forges, and improve them twice as much.",
                    "ID": "000cb411",
                    "selected": false,
                },
                "Dragon Armor": {
                    "description": "Can create Dragon armor at forges, and improve them twice as much.*",
                    "ID": "00052190",
                    "selected": false,
                },
            },
        },
        "twohanded": {
            "name": "Two Handed",
            "technicalName": "twohanded",
            "level": 0,
            "selected": false,
            "perks": {
                "Barbarian": {
                    "rank": {
                        "1": {
                            "description": "Two-Handed weapons do 20% more damage.",
                            "ID": "000babe8",
                            "selected": false,
                        },
                        "2": {
                            "description": "Two-Handed weapons do 40% more damage.",
                            "ID": "00079346",
                            "selected": false,
                        },
                        "3": {
                            "description": "Two-Handed weapons do 60% more damage.",
                            "ID": "00079347",
                            "selected": false,
                        },
                        "4": {
                            "description": "Two-Handed weapons do 80% more damage.",
                            "ID": "00079348",
                            "selected": false,
                        },
                        "5": {
                            "description": "Two-Handed weapons do twice as much damage.",
                            "ID": "00079349",
                            "selected": false,
                        },
                    },
                },
                "Champion's Stance": {
                    "description": "Power attacks with two-handed weapons cost 25% less stamina.",
                    "ID": "00052d51",
                    "selected": false,
                },
                "Devastating Blow": {
                    "description": "Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.",
                    "ID": "00052d52",
                    "selected": false,
                },
                "Great Critical Charge": {
                    "description": "Can do a two-handed power attack while sprinting that does double critical damage.",
                    "ID": "000cb407",
                    "selected": false,
                },
                "Sweep": {
                    "description": "Sideways power attacks with two-handed weapons hit all targets in front of you.",
                    "ID": "0003af9e",
                    "selected": false,
                },
                "Warmaster": {
                    "description": "Backwards power attack has a 25% chance to paralyze the target.",
                    "ID": "0003afa7",
                    "selected": false,
                },
                "Deep Wounds": {
                    "rank": {
                        "1": {
                            "description": "Attacks with greatswords have a 10% chance of doing critical damage.",
                            "ID": "0003af83",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with greatswords have a 15% chance of doing more critical damage.",
                            "ID": "000c1e94",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with greatswords have a 20% chance of doing even more critical damage.",
                            "ID": "000c1e95",
                            "selected": false,
                        },
                    },
                },
                "Limbsplitter": {
                    "rank": {
                        "1": {
                            "description": "Attacks with battle axes cause extra bleeding damage.",
                            "ID": "000c5c05",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with battle axes cause more bleeding damage.",
                            "ID": "000c5c06",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with battle axes cause even more bleeding damage.",
                            "ID": "000c5c07",
                            "selected": false,
                        },
                    },
                },
                "Skullcrusher": {
                    "rank": {
                        "1": {
                            "description": "Attacks with warhammers ignore 25% of armor.",
                            "ID": "0003af84",
                            "selected": false,
                        },
                        "2": {
                            "description": "Attacks with warhammers ignore 50% of armor.",
                            "ID": "000c1e96",
                            "selected": false,
                        },
                        "3": {
                            "description": "Attacks with warhammers ignore 75% of armor.",
                            "ID": "000c1e97",
                            "selected": false,
                        },
                    },
                },
            }
        },
    });
    const [allSelected, setAllSelected] = useState([])

    const [isAdding, setIsAdding] = useState(true);

    const handleOnSkillSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleOnCheckedSkill = (skillName) => {
        let updatedSkill = {
            [skillName]: {}
        };

        console.log(skillName)
        if (skillName in skills) {
            // console.log("in skills")
            // console.log(skills[skillName])

            updatedSkill = {
                [skillName]: {
                    ...skills[skillName],
                    selected: !skills[skillName].selected,
                }
            }

            // console.log(updatedSkill[skillName])
            // console.log(skills)
            // console.log({ ...skills, [skillName]: updatedSkill[skillName] })
            setSkills({ ...skills, [skillName]: updatedSkill[skillName] })
        }
    }

    console.log(skills.archery.perks.overdraw.rank[1].ID)

    // TODO: condense checking and updating skill
    // 
    const handleOnSkillChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        let skillName = e.target.name.toLowerCase();
        let skillValue = e.target.value;
        let updatedSkill = {
            [skillName]: {}
        };
        // console.log(skillName)
        if (skillName in skills) {
            updatedSkill = {
                [skillName]: {
                    ...skills[skillName],
                    level: skillValue * 1,
                }
            }
            console.log(updatedSkill)
            setSkills({ ...skills, [skillName]: updatedSkill[skillName] })
        }
    }


    // DEBUG:
    const printAllSelected = () => {
        const allSelected = []
        let ret = "";


        for (const [key, value] of Object.entries(skills)) {
            if (value.selected) {
                console.log(key, value);
                allSelected.push({
                    [key]: value
                })
                ret += "player.setav " + value.technicalName + " " + value.level + " |||| "
            }
        }


        return (
            <div style={{ width: "50%" }}>
                {ret}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>
                Skyrim Console Commander
            </h1>
            <div>
                <h2>TODO: to *JUST* SET</h2>
                <h2>Select a stat to SET:</h2>
                {/* TODO: Add the rest of the attributes */}

                <form onSubmit={(e) => { handleOnSkillSubmit(e) }}>
                    <div style={{ display: "flex" }} >
                        <div>
                            {/* <h2>Warrior Skills</h2>
                            <OneSkill
                                skill={skills.archery}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.block}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.heavyarmor}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.onehanded}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.smithing}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.twohanded}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill> */}
                        </div>
                        <div>
                            {/* <h2>Mage Skills</h2>
                            <OneSkill
                                skill={skills.alteration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.conjuration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.destruction}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.enchanting}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.illusion}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.restoration}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill> */}
                        </div>
                        <div>
                            <h2>Thief Skills</h2>
                            {/* <OneSkill
                                skill={skills.alchemy}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.lightarmor}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.lockpicking}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.pickpocket}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                            <OneSkill
                                skill={skills.sneak}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill> */}
                            <OneSkill
                                skill={skills.speech}
                                handleOnCheckedSkill={handleOnCheckedSkill}
                                handleOnSkillChange={handleOnSkillChange}>
                            </OneSkill>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
                <button onClick={() => console.log(skills)}>DEBUG CLG</button>
                {
                    printAllSelected()
                }
                {/* <div>
            <label>Enchanting</label>
            <input type="number" onChange={(e) => handleOnSkillChange(e, "enchanting")}></input>
            </div>
          <button type="submit">Submit</button> */}
                {/* <Output skills={skills}></Output> */}
                {/* <p>

                    {JSON.stringify(skills)}
                </p> */}
            </div >
        </div >
    )
}

export default App

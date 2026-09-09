export type Source={label:string;url:string};export type Visual={assetId:string;src:string;width:number;height:number;alt:string;caption:string};export type Section={heading:string;paragraphs:string[];visual?:Visual;table?:{columns:string[];rows:string[][]}};export type Guide={slug:string;category:string;title:string;description:string;quickAnswer:string;updated:string;sources:Source[];sections:Section[];evidenceClass:string;relatedSlugs?:string[]};
export const guides:Guide[]=[
  {
    "slug": "castle-busters-beginner-route",
    "category": "Beginner Progression",
    "title": "Castle Busters Beginner Checklist: Upgrades and Arena 7",
    "description": "Check victory conditions, the eight-unit limit, upgrade choices, Forge features and dated hero access notes before your next match.",
    "quickAnswer": "Play one match, note whether your units or castle failed first, change one unit, position, or upgrade tied to that failure, then replay. Treat Arena 7 as the first named checkpoint and keep wider spending on hold until the same change helps twice.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      }
    ],
    "sections": [
      {
        "heading": "Start with the two ways a match ends",
        "paragraphs": [
          "Castle Busters lists two victory conditions: eliminate every enemy unit or destroy the enemy castle. Read your own losses with the same split. Did your squad disappear first, or did the castle break while useful units were still fighting?",
          "Write down that result before spending. A short note or screenshot is enough. The next change should answer the failure you saw, rather than a notification, rarity, or general tier-list claim."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official game context",
          "caption": "Official public media used for recognition; verify current values in game."
        }
      },
      {
        "heading": "Check the unit limit before changing your squad",
        "paragraphs": [
          "The official site says a squad can contain up to eight unique units. Eight is a ceiling, not a request to fund eight separate upgrade projects immediately. Start with the units you can field, then change one slot or position at a time.",
          "Use the table below after a loss. Replay a comparable fight after the change. If the same failure returns, stop spending in that direction and test a different cause."
        ],
        "table": {
          "columns": ["What failed first", "Inspect", "Change next", "Stop condition"],
          "rows": [
            ["Units", "Role and firing line", "Replace or reposition one unit", "Same unit failure repeats"],
            ["Castle", "Exposure, movement and durability", "Move once or test one castle upgrade", "Castle still breaks at the same stage"],
            ["Enemy units survive", "Aim and dependable damage", "Retest one damage source", "No clear improvement after replay"],
            ["Placement effect is missing", "Neighbor, row or column condition", "Move one placement-sensitive hero", "Effect still does not trigger"]
          ]
        },
        "visual": {
          "assetId": "castle-busters-guide-editorial-02",
          "src": "/images/editorial/castle-busters-guide-editorial-02.webp",
          "width": 1600,
          "height": 900,
          "alt": "Four-step Castle Busters upgrade decision diagram",
          "caption": "Project-original decision diagram, not a gameplay screenshot: find the bottleneck, compare unit and castle options, set a stop rule, then retest the same matchup."
        }
      },
      {
        "heading": "Spend against one bottleneck",
        "paragraphs": [
          "The official overview confirms unit upgrades, castle upgrades, and multiple material tiers. It does not publish a universal first-spend order. That makes a fixed upgrade chart less reliable than matching one purchase to one observed problem.",
          "Buy the smallest available change that could affect the failure, then replay. If the failure category does not move, stop. Save broader spending until a useful change survives a second comparable test."
        ]
      },
      {
        "heading": "Add movement, structures and Forge items deliberately",
        "paragraphs": [
          "Wheels move the castle. The Forge provides wheel sets with different attributes, including speed and fuel, plus offensive and defensive helper items. Use these systems to test a specific problem such as exposure or reach.",
          "The public pages do not state exact unlock thresholds, drop rates, or one best wheel set. Keep those values unknown until the current client shows them. Test one movement or helper-item change and record the trade it creates."
        ]
      },
      {
        "heading": "Use Arena 7 as the first named checkpoint",
        "paragraphs": [
          "Patch 1.16 labels Sir Rally as free at Arena 7 and Leif as free at Arena 25. Treat those as dated access labels, not proof that either hero is already claimed on your account. Wolfie is labelled Battle Pass exclusive in the same patch.",
          "Placement matters for all three examples. Sir Rally boosts allies directly around him. Leif revives fallen allies in his row after he kills an enemy unit. Wolfie transforms after an adjacent ally is eliminated. Test the named condition before judging the hero."
        ],
        "table": {
          "columns": ["Hero", "Patch 1.16 label", "Placement check"],
          "rows": [
            ["Sir Rally", "Arena 7 · Free", "Allies directly around him"],
            ["Leif", "Arena 25 · Free", "Fallen allies in his row after his kill"],
            ["Wolfie", "Battle Pass Exclusive", "An adjacent ally is eliminated"]
          ]
        }
      },
      {
        "heading": "Reset the route only when the evidence changes",
        "paragraphs": [
          "Patch 1.17 fixed a unit-position problem when swapping units, so an older failed placement test may no longer describe the current build. Retest after a patch changes the behavior you measured or when your losses shift to a different cause.",
          "The same patch says in-game support is available under Settings and Help Center. The public note does not show every nested tap. If your screen differs, open the visible Help Center entry and report the mismatch rather than forcing an outdated route."
        ]
      },
      {
        "heading": "First-session checklist",
        "paragraphs": [
          "Play one baseline match. Record whether the squad or castle failed first. Change one unit, position, movement option, helper item, or upgrade. Replay a comparable fight and stop that line of spending if the same failure returns.",
          "At Arena 7, check the current Sir Rally access label and test his nearby-ally condition if he is available. Keep exact costs, drop rates, and a universal best upgrade order unclaimed until the current client provides them."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_current_guide",
    "relatedSlugs": [
      "castle-busters-unit-database",
      "castle-busters-formation",
      "upgrade-materials-priority"
    ]
  },
  {
    "slug": "castle-busters-unit-database",
    "category": "Units",
    "title": "Castle Busters Units List: 8 Documented Units and Abilities",
    "description": "Find 8 Castle Busters unit names, their documented attacks or abilities, dated access notes, and the limits of the official 30+ roster claim.",
    "quickAnswer": "The official pages describe Bishop, Wrecker, Fairy, Pulsar, Saxton, Sir Rally, Leif and Wolfie. This is a sourced partial list: the site says 30+ units, while the exact full roster and most stats remain unpublished.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters — official unit descriptions",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Castle Busters — patch 1.16",
        "url": "https://castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Castle Busters — patch 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      }
    ],
    "sections": [
      {
        "heading": "Castle Busters units list at a glance",
        "paragraphs": [
          "Castle Busters advertises a roster of 30+ units. The public pages checked for this guide provide attack or ability descriptions for eight of them: Bishop, Wrecker, Fairy, Pulsar, Saxton, Sir Rally, Leif and Wolfie.",
          "This table is a documented partial list. It does not turn the 30+ marketing statement into an exact denominator, and it does not fill unpublished stats, rarities or unlock conditions with guesses."
        ],
        "table": {
          "columns": [
            "Unit",
            "Documented attack or ability",
            "Access note in source",
            "Source context"
          ],
          "rows": [
            [
              "Bishop",
              "Fires a bomb with delayed detonation.",
              "Premium; exact unlock not listed.",
              "Undated official unit description."
            ],
            [
              "Wrecker",
              "Fires one large bomb that deals area damage.",
              "Not listed.",
              "Undated official unit description."
            ],
            [
              "Fairy",
              "Releases destructive orbs that rain down on enemies.",
              "Premium; exact unlock not listed.",
              "Undated official unit description."
            ],
            [
              "Pulsar",
              "Fires an accurate, powerful laser in the target direction.",
              "Not listed.",
              "Undated official unit description."
            ],
            [
              "Saxton",
              "Fires three boomerangs that return to the castle.",
              "Not listed.",
              "Undated official unit description."
            ],
            [
              "Sir Rally",
              "Boosts the damage of allied heroes placed immediately around him.",
              "Arena 7 · Free in patch 1.16.",
              "Patch 1.16; patch 1.17 adds an unspecified cast delay."
            ],
            [
              "Leif",
              "After he defeats an enemy unit, fallen allies in his row return to life.",
              "Arena 25 · Free in patch 1.16.",
              "Patch 1.16."
            ],
            [
              "Wolfie",
              "Transforms and attacks harder after an ally next to him is defeated.",
              "Battle Pass Exclusive in patch 1.16.",
              "Patch 1.16; current-season access is not confirmed."
            ]
          ]
        },
        "visual": {
          "assetId": "castle-busters-units-official-a",
          "src": "/images/official/castle-busters-units-official-a.webp",
          "width": 1600,
          "height": 900,
          "alt": "Official Castle Busters character art for Bishop, Wrecker, Fairy and Pulsar",
          "caption": "Official character art for Bishop, Wrecker, Fairy and Pulsar, arranged and labelled for identification. This is a partial roster reference, not a gameplay or stats screen."
        }
      },
      {
        "heading": "Recognize Saxton, Sir Rally, Leif and Wolfie",
        "paragraphs": [
          "The second identification panel pairs Saxton with the three heroes introduced in patch 1.16. The patch says the updated hero-visual rollout was complete for all players at that time, so older portraits should not be matched to a name without checking the source and date.",
          "Character art confirms identity only. Use the table and cited pages for behavior and access wording; the artwork does not prove damage values, rarity, current ownership or a complete roster."
        ],
        "visual": {
          "assetId": "castle-busters-units-official-b",
          "src": "/images/official/castle-busters-units-official-b.webp",
          "width": 1600,
          "height": 900,
          "alt": "Official Castle Busters character art for Saxton, Sir Rally, Leif and Wolfie",
          "caption": "Official character art for Saxton, Sir Rally, Leif and Wolfie, arranged and labelled for identification. Ability details remain in the source-backed table."
        }
      },
      {
        "heading": "Read placement-sensitive abilities precisely",
        "paragraphs": [
          "Sir Rally, Leif and Wolfie do not share one generic formation rule. Sir Rally affects allied heroes immediately around him. Leif needs both a fallen ally in his row and an enemy defeat by Leif. Wolfie reacts when an ally next to him is taken out.",
          "The public notes do not define Sir Rally’s exact diagonal coverage, Leif’s behavior outside his row, Wolfie’s trigger count or any of their numerical bonuses. Patch 1.17 says Sir Rally received a cast delay but does not publish its duration."
        ]
      },
      {
        "heading": "Vampire is named, but its ability is not documented here",
        "paragraphs": [
          "Patch 1.17 names Vampire only in a bug fix for the animation used when switching between moves. That is enough to record Vampire as an officially mentioned unit, but not enough to claim an attack, a healing or life-steal mechanic, a role, stats or an unlock method.",
          "For that reason, Vampire is not counted among the eight described rows above. It remains a named-only record until an accepted source provides the missing behavior."
        ]
      },
      {
        "heading": "Coverage and missing fields",
        "paragraphs": [
          "The current coverage is eight units with published attack or ability descriptions, plus one separately named unit with only a patch-animation record. The exact current roster total is unknown because 30+ is a marketing range, not a complete roster snapshot.",
          "The accepted sources do not provide the full unit list, official role taxonomy, complete rarity set, health, damage, cooldown, range, upgrade growth or all current unlock methods. Premium is kept as the source label; it is not converted into a price, rarity or single purchase route."
        ],
        "table": {
          "columns": [
            "Coverage item",
            "What is confirmed",
            "What remains unknown"
          ],
          "rows": [
            [
              "Published roster statement",
              "30+ unique units.",
              "Exact current total and full list."
            ],
            [
              "Behavior descriptions",
              "Eight named units in the table.",
              "Most unit abilities and all complete stat lines."
            ],
            [
              "Additional named record",
              "Vampire appears in a patch 1.17 animation fix.",
              "Vampire’s attack, ability, access and stats."
            ],
            [
              "Dated access notes",
              "Sir Rally, Leif and Wolfie labels from patch 1.16.",
              "Current account, shop and season availability."
            ]
          ]
        }
      },
      {
        "heading": "Use the next guide for the decision you need",
        "paragraphs": [
          "Open the loadout guide for the eight-unit team limit and dated access comparison. Use the formation guide for the three placement-sensitive hero conditions. Use the upgrade guide after selecting a unit and deciding whether to buy one level or a larger batch.",
          "A complete roster, all stats and a current tier list stay outside this page until the evidence exists."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page",
    "relatedSlugs": [
      "castle-busters-eight-unit-loadout",
      "castle-busters-formation",
      "upgrade-breakpoints-stop-rules"
    ]
  },
  {
    "slug": "castle-busters-eight-unit-loadout",
    "category": "Loadouts",
    "title": "Castle Busters Loadout: Unit Limit and Hero Conditions",
    "description": "Check the eight-unit limit, documented hero access, and the skill conditions of Sir Rally, Leif and Wolfie before comparing loadout options.",
    "quickAnswer": "A Castle Busters loadout supports up to eight distinct units. Patch 1.16 lists Sir Rally as free at Arena 7, Leif as free at Arena 25, and Wolfie as Battle Pass exclusive. Their skill conditions differ; these names and access labels do not establish a tested eight-unit team.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters — patch 1.16",
        "url": "https://castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Castle Busters — patch 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Castle Busters — official unit descriptions",
        "url": "https://castlebusters.com/"
      }
    ],
    "sections": [
      {
        "heading": "Start with the unit limit",
        "paragraphs": [
          "The official game description allows up to eight distinct units in a loadout. That limit does not prescribe eight particular names or a fixed number of units in each role.",
          "Use the access labels below to distinguish the published requirements before treating a named hero as an available option. They describe the cited release or unit page, not the contents of your account."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters logo",
          "caption": "Castle Busters."
        }
      },
      {
        "heading": "Compare the access conditions",
        "paragraphs": [
          "The Arena and Battle Pass entries come from patch 1.16. Bishop and Fairy’s premium labels come from the undated official unit descriptions; neither label supplies a purchase price."
        ],
        "table": {
          "columns": [
            "Unit",
            "Listed access",
            "Context"
          ],
          "rows": [
            [
              "Sir Rally",
              "Free at Arena 7",
              "Patch 1.16; reaching the listed Arena is not proof that the hero is already owned."
            ],
            [
              "Leif",
              "Free at Arena 25",
              "Patch 1.16; not a free Arena 7 starter."
            ],
            [
              "Wolfie",
              "Battle Pass exclusive",
              "Patch 1.16; current-season and later acquisition are not specified here."
            ],
            [
              "Bishop",
              "Premium",
              "Undated official description; no price or exact unlock stated."
            ],
            [
              "Fairy",
              "Premium",
              "Undated official description; no price or exact unlock stated."
            ]
          ]
        }
      },
      {
        "heading": "Keep the skill requirement with the choice",
        "paragraphs": [
          "Choosing a hero does not by itself show that its skill condition is met. For Leif, keep both parts together: fallen allies in his row and an enemy kill by Leif.",
          "Sir Rally also received a cast delay in patch 1.17. The delay is part of the later note; its duration is not specified."
        ],
        "table": {
          "columns": [
            "Hero",
            "Condition to account for",
            "Described result"
          ],
          "rows": [
            [
              "Sir Rally",
              "Allied heroes immediately around him",
              "Their damage increases."
            ],
            [
              "Leif",
              "Fallen allies in his row, followed by Leif killing an enemy unit",
              "Those allies revive."
            ],
            [
              "Wolfie",
              "A neighboring ally dies",
              "Wolfie transforms and gains attack strength."
            ]
          ]
        }
      },
      {
        "heading": "Continue with the individual unit or formation rule",
        "paragraphs": [
          "The unit reference lists eight named attacks and skills, and the formation guide explains the three position-sensitive conditions. This page provides the capacity and conditions for comparing options; it does not supply a tested eight-unit team or named replacement chain."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page",
    "relatedSlugs": [
      "castle-busters-unit-database",
      "castle-busters-formation"
    ]
  },
  {
    "slug": "castle-busters-formation",
    "category": "Formations",
    "title": "Castle Busters Formation Rules: Sir Rally, Leif and Wolfie",
    "description": "Compare the documented nearby-ally, same-row revival and neighboring-death rules, plus the placement fixes reported in patch 1.17.",
    "quickAnswer": "Patch 1.16 describes three different formation conditions: Sir Rally boosts allied heroes immediately around him; Leif revives fallen allies in his row when he kills an enemy unit; Wolfie transforms after a neighboring ally dies. These rules do not specify an exact grid layout.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters — patch 1.16",
        "url": "https://castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Castle Busters — patch 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      }
    ],
    "sections": [
      {
        "heading": "Match the hero to its formation condition",
        "paragraphs": [
          "Read the required relationship or event before the effect. The three rows below follow the descriptions in patch 1.16."
        ],
        "table": {
          "columns": [
            "Hero",
            "Required relationship or event",
            "Described effect"
          ],
          "rows": [
            [
              "Sir Rally",
              "Allied heroes immediately around him",
              "Raises their damage."
            ],
            [
              "Leif",
              "Allies have fallen in his row; Leif kills an enemy unit",
              "Revives those fallen allies."
            ],
            [
              "Wolfie",
              "A neighboring ally dies",
              "Transforms and gains attack strength."
            ]
          ]
        },
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters logo",
          "caption": "Castle Busters."
        }
      },
      {
        "heading": "Read the condition before assuming a position works",
        "paragraphs": [
          "For Leif, being in the same row is only part of the description: his enemy kill is the stated trigger. For Wolfie, a neighboring ally’s death is the stated event. These are different conditions, so a generic “front row” label cannot explain both.",
          "Sir Rally received a cast delay in patch 1.17. The notes here provide no delay duration, exact surrounding-cell pattern or tested diagonal placement. This guide explains the written relationships; it does not prescribe an exact grid."
        ]
      },
      {
        "heading": "Keep the 1.17 placement fixes separate",
        "paragraphs": [
          "Patch 1.17 reports fixes for the foundations interface disappearing during enemy turns and for unit placement after swaps."
        ],
        "table": {
          "columns": [
            "Affected area",
            "Reported change",
            "How to read it"
          ],
          "rows": [
            [
              "Foundations interface",
              "Fixed disappearing foundations UI during enemy turns.",
              "This concerns the interface; it does not describe whether a building collapses."
            ],
            [
              "Unit swaps",
              "Fixed unit placement after swaps.",
              "A placement bug fix does not identify the strongest formation."
            ]
          ]
        }
      },
      {
        "heading": "Look up access or the full patch entry",
        "paragraphs": [
          "Use the unit reference for the named descriptions and access notes. The loadout conditions page compares the relevant requirements; the patch log groups the other changes from 1.17."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page",
    "relatedSlugs": [
      "castle-busters-unit-database",
      "castle-busters-eight-unit-loadout",
      "patch-notes-and-balance-log"
    ]
  },
  {
    "slug": "upgrade-materials-priority",
    "category": "Build Choice Comparison",
    "title": "Castle Busters Upgrade Materials: Tiers and Spend Checks",
    "description": "See the published material path from wood and stone to diamond and magma, then check which upgrade system matches the problem in your next battle.",
    "quickAnswer": "The official site confirms that material tiers begin with wood and stone and advance to diamond and magma, but it does not publish costs or one best order. Match one visible upgrade to the problem you observed, record the current tier and cost, then stop if the same failure returns.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters official features",
        "url": "https://castlebusters.com/"
      }
    ],
    "sections": [
      {
        "heading": "Confirm the published material path",
        "paragraphs": [
          "The official upgrading section says the material path starts with wood and stone and advances to diamond and magma. Those are published endpoints and examples, not a complete tier table.",
          "The public page does not list the cost, quantity, account stage, or unlock condition for each tier. Read those values from the current client before spending, and do not carry a value from another account into your own plan."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official game identity",
          "caption": "Official public media used for game recognition; it does not show current material costs or upgrade menus."
        }
      },
      {
        "heading": "Match the upgrade system to the problem",
        "paragraphs": [
          "Castle Busters publishes several places where resources can matter. Castle upgrades improve durability and defensive options. Unit upgrades unlock perks and power spikes. Wheels change castle movement, while helper items provide offensive or defensive tools.",
          "The table is a checking order, not an official tier list. Choose the row that matches the first failure you can see, inspect the live value, and change one system before comparing another battle."
        ],
        "table": {
          "columns": ["Observed problem", "System to inspect", "Published purpose", "Keep unknown until shown"],
          "rows": [
            ["Castle breaks while useful units remain", "Castle upgrade", "Durability and stronger defensive options", "Cost, gain and best structure"],
            ["A unit has an available upgrade", "Unit upgrade", "Perks and power spikes", "Next breakpoint and cost"],
            ["Castle cannot reach a useful angle", "Wheel set", "Movement with attributes such as speed and fuel", "Exact stats and Forge gate"],
            ["One battle needs an extra tool", "Helper item", "Offensive gadgets or defensive boosts", "Exact effect, inventory and drop chance"]
          ]
        }
      },
      {
        "heading": "Read Forge as a source, not a drop table",
        "paragraphs": [
          "The official feature page says new wheel sets come through the Forge and that offensive and defensive helper items are earned there too. It does not publish Forge gates, reset rules, recipes, chances, or a collection sequence.",
          "Check the current Forge screen before claiming that an item is available. For wheels, compare the attributes the client actually displays, such as speed and fuel, against the movement problem you recorded."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-02",
          "src": "/images/editorial/castle-busters-guide-editorial-02.webp",
          "width": 1600,
          "height": 900,
          "alt": "Four-step Castle Busters upgrade check",
          "caption": "Project-original decision diagram, not a gameplay screenshot: find the bottleneck, compare one system, set a stop rule, and retest."
        }
      },
      {
        "heading": "Separate material tier from spend priority",
        "paragraphs": [
          "A later material tier describes progression, but it does not prove which system deserves the next purchase. The official page asks players to reinforce the parts that matter most; it does not publish a universal order for units, structures, wheels, or helper items.",
          "Use one controlled comparison. Record the first decisive failure, buy the smallest visible change that could affect it, and replay a comparable battle. This is an editorial test procedure, not a claim that one upgrade is always optimal."
        ]
      },
      {
        "heading": "Capture four fields before spending",
        "paragraphs": [
          "Write down the system, the visible material tier, the displayed cost, and the failure you want to change. After the next battle, add the first unit lost, the castle condition, and whether the original failure moved earlier or later.",
          "If a different opponent or formation makes the comparison unclear, label the result partial. One win can justify keeping a test candidate; it cannot establish a universal priority for every account."
        ]
      },
      {
        "heading": "Stop at the first unknown",
        "paragraphs": [
          "Keep current wood income, exact building costs, tier unlock stages, unit stop levels, Forge probabilities, and a universal best investment order unknown unless the current client or a dated official source supplies them.",
          "If the live menu differs from this page, save the visible label and date. Do not substitute an older video, search snippet, or another player's number for the missing value."
        ]
      },
      {
        "heading": "When to update this page",
        "paragraphs": [
          "Recheck this guide when the official upgrading or Forge descriptions change, when a patch changes the economy, or when the current client shows a different material path. A layout change by itself does not prove that costs or priorities changed.",
          "The useful result is a dated account observation: current tier, visible cost, selected system, and the battle outcome after one change. That evidence can support a later update without turning one account into a global rule."
        ]
      }
    ],
    "evidenceClass": "source_bounded_current_guide",
    "relatedSlugs": [
      "castle-busters-beginner-route",
      "wheels-and-helper-items",
      "upgrade-breakpoints-stop-rules"
    ]
  },
  {
    "slug": "patch-notes-and-balance-log",
    "category": "Updates",
    "title": "Castle Busters Patch 1.17 and 1.16: Changes Explained",
    "description": "Read the named changes to Sir Rally, support, upgrades, placement and combat visuals in patch 1.17, with the hero additions and visual rollout in 1.16.",
    "quickAnswer": "Patch 1.17 reports a Sir Rally cast delay, Settings support and Help Center access, a matchmaking test, removal of the 40-level limit per upgrade action, and several placement, healing and visual fixes. Patch 1.16 introduced Sir Rally, Leif and Wolfie.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters — patch 1.16",
        "url": "https://castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Castle Busters — patch 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      }
    ],
    "sections": [
      {
        "heading": "Patch 1.17: changes by system",
        "paragraphs": [
          "Use the system column to find the change that affects your question. These entries summarize the official release notes; they do not confirm the installed build or the outcome on a particular account."
        ],
        "table": {
          "columns": [
            "System",
            "What patch 1.17 says",
            "Detail that matters"
          ],
          "rows": [
            [
              "Sir Rally",
              "Adds a cast delay.",
              "No delay duration is stated."
            ],
            [
              "Support",
              "Adds support contact and a Help Center in Settings.",
              "Settings is the documented entry; an exact sequence of buttons is not given here."
            ],
            [
              "Matchmaking",
              "Tests revised matchmaking.",
              "The matching formula is not specified."
            ],
            [
              "Unit upgrades",
              "Removes the limit of 40 unit levels per upgrade action.",
              "40 refers to the former single-action increment, not the unit’s maximum level."
            ],
            [
              "Foundations interface",
              "Fixes foundations UI disappearing during enemy turns.",
              "The note concerns the interface, not a building’s physical survival."
            ],
            [
              "Utility healing",
              "Fixes healing in certain situations.",
              "The note does not give a universal healing guarantee."
            ],
            [
              "Unit placement",
              "Fixes placement after swaps.",
              "The named case is placement following a swap."
            ],
            [
              "Poison-cloud visuals",
              "Makes the cloud visuals match the attack radius.",
              "This is a visual correction, not a stated damage or radius increase."
            ],
            [
              "Bots",
              "Fixes bots leaving the map edge.",
              "It does not say bots have been removed from the game."
            ]
          ]
        },
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters logo",
          "caption": "Castle Busters."
        }
      },
      {
        "heading": "The upgrade limit is about a single action",
        "paragraphs": [
          "The number 40 describes how many unit levels the old upgrade action could add at once. Patch 1.17 announces the removal of that per-action limit. It does not announce a new maximum unit level, cheaper upgrades or free levels."
        ]
      },
      {
        "heading": "Patch 1.16: heroes and updated visuals",
        "paragraphs": [
          "Patch 1.16 introduced Sir Rally, Leif and Wolfie and says the updated hero visuals had finished rolling out. Keep those names with the 1.16 record when comparing an older unit description or portrait."
        ],
        "table": {
          "columns": [
            "Change",
            "Patch 1.16 statement"
          ],
          "rows": [
            [
              "New heroes",
              "Sir Rally, Leif and Wolfie."
            ],
            [
              "Hero visuals",
              "The updated hero visuals finished rolling out."
            ]
          ]
        }
      },
      {
        "heading": "Read the affected guide",
        "paragraphs": [
          "The unit reference covers the named hero descriptions. The formation rules page explains their position-sensitive conditions and the placement-related notes. Use those pages for the detail behind a hero or formation question."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page",
    "relatedSlugs": [
      "castle-busters-unit-database",
      "castle-busters-formation"
    ]
  },
  {
    "slug": "unit-roles-explained",
    "category": "Core System Explainer",
    "title": "Castle Busters Unit Roles Explained",
    "description": "A current, source-checked guide to castle busters unit roles explained, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Classify units by observable battlefield job—protection, reliable damage, area pressure, control, support, or placement dependency—before comparing rarity.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Classify units by observable battlefield job—protection, reliable damage, area pressure, control, support, or placement dependency—before comparing rarity. This is the direct answer for Castle Busters Unit Roles Explained, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Role labels remain descriptive and versioned; they do not constitute a tier list or complete stat database. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Castle Busters Unit Roles Explained: The official site shows Bishop, Wrecker, Fairy, Pulsar, and Saxton with distinct attack descriptions. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Castle Busters Unit Roles Explained: The roster contains more than thirty units. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Castle Busters Unit Roles Explained: Patch 1.16 adds heroes whose effects depend on nearby allies, rows, or position. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Castle Busters Unit Roles Explained: A squad can contain up to eight unique units. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Castle Busters Unit Roles Explained",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Write the battle job the slot must perform. For Castle Busters Unit Roles Explained, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Tag a unit only with behavior stated or observed. For Castle Busters Unit Roles Explained, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Add its placement condition and upgrade burden. For Castle Busters Unit Roles Explained, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Compare substitutes by preserved function. For Castle Busters Unit Roles Explained, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Castle Busters Unit Roles Explained starts with the current state that makes this action relevant: Write the battle job the slot must perform. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Castle Busters Unit Roles Explained starts with the current state that makes this action relevant: Tag a unit only with behavior stated or observed. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Castle Busters Unit Roles Explained starts with the current state that makes this action relevant: Add its placement condition and upgrade burden. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Castle Busters Unit Roles Explained starts with the current state that makes this action relevant: Compare substitutes by preserved function. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Rarity is not a battlefield role. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Similar animations can hide different targeting behavior. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A placement effect can disappear after a swap. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Patch-specific units may not be available on every account. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Busters Unit Roles Explained evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Castle Busters Unit Roles Explained is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Castle Busters Unit Roles Explained, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Castle Busters Unit Roles Explained is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Castle Busters Unit Roles Explained. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Castle Busters Unit Roles Explained",
        "paragraphs": [
          "Field note 1 for Castle Busters Unit Roles Explained connects three page-specific signals. Baseline: The official site shows Bishop, Wrecker, Fairy, Pulsar, and Saxton with distinct attack descriptions. Operational move: Write the battle job the slot must perform. Confounder to exclude: Rarity is not a battlefield role. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Castle Busters Unit Roles Explained connects three page-specific signals. Baseline: The roster contains more than thirty units. Operational move: Tag a unit only with behavior stated or observed. Confounder to exclude: Similar animations can hide different targeting behavior. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Castle Busters Unit Roles Explained connects three page-specific signals. Baseline: Patch 1.16 adds heroes whose effects depend on nearby allies, rows, or position. Operational move: Add its placement condition and upgrade burden. Confounder to exclude: A placement effect can disappear after a swap. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Castle Busters Unit Roles Explained connects three page-specific signals. Baseline: A squad can contain up to eight unique units. Operational move: Compare substitutes by preserved function. Confounder to exclude: Patch-specific units may not be available on every account. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Castle Busters Unit Roles Explained, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Castle Busters Unit Roles Explained, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "frontline-backline-placement",
    "category": "Blocker Walkthrough",
    "title": "Frontline and Backline Placement Guide",
    "description": "A current, source-checked guide to frontline and backline placement guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Protect the unit whose action the plan depends on, preserve its firing angle, and move only one position before replaying the same objective.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Protect the unit whose action the plan depends on, preserve its firing angle, and move only one position before replaying the same objective. This is the direct answer for Frontline and Backline Placement Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The guide teaches diagnosis and controlled replay, not a single formation valid against every opponent. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Frontline and Backline Placement Guide: The official site says players aim and fire from inside a movable castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Frontline and Backline Placement Guide: Structures can create safe positions and stronger defenses. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Frontline and Backline Placement Guide: Patch 1.16 explicitly ties some hero effects to neighbors and rows. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Frontline and Backline Placement Guide: Patch 1.17 fixed a unit's position when swapped on the castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Frontline and Backline Placement Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Mark the first point of enemy pressure. For Frontline and Backline Placement Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Identify the friendly unit that must remain active. For Frontline and Backline Placement Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Place protection without blocking its shot. For Frontline and Backline Placement Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Replay after one positional change. For Frontline and Backline Placement Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Frontline and Backline Placement Guide starts with the current state that makes this action relevant: Mark the first point of enemy pressure. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Frontline and Backline Placement Guide starts with the current state that makes this action relevant: Identify the friendly unit that must remain active. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Frontline and Backline Placement Guide starts with the current state that makes this action relevant: Place protection without blocking its shot. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Frontline and Backline Placement Guide starts with the current state that makes this action relevant: Replay after one positional change. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: A symmetrical layout can expose both sides equally. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Moving the castle can solve one angle and open another. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A swap bug may have affected older recordings. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Two simultaneous moves make the improvement impossible to attribute. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Frontline and Backline Placement Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Frontline and Backline Placement Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Frontline and Backline Placement Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Frontline and Backline Placement Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Frontline and Backline Placement Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Frontline and Backline Placement Guide",
        "paragraphs": [
          "Field note 1 for Frontline and Backline Placement Guide connects three page-specific signals. Baseline: The official site says players aim and fire from inside a movable castle. Operational move: Mark the first point of enemy pressure. Confounder to exclude: A symmetrical layout can expose both sides equally. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Frontline and Backline Placement Guide connects three page-specific signals. Baseline: Structures can create safe positions and stronger defenses. Operational move: Identify the friendly unit that must remain active. Confounder to exclude: Moving the castle can solve one angle and open another. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Frontline and Backline Placement Guide connects three page-specific signals. Baseline: Patch 1.16 explicitly ties some hero effects to neighbors and rows. Operational move: Place protection without blocking its shot. Confounder to exclude: A swap bug may have affected older recordings. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Frontline and Backline Placement Guide connects three page-specific signals. Baseline: Patch 1.17 fixed a unit's position when swapped on the castle. Operational move: Replay after one positional change. Confounder to exclude: Two simultaneous moves make the improvement impossible to attribute. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Frontline and Backline Placement Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Frontline and Backline Placement Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "damage-control-support-balance",
    "category": "Data Tool Decision Table",
    "title": "Damage, Control, and Support Unit Balance",
    "description": "A current, source-checked guide to damage, control, and support unit balance, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Build the squad around the current objective: enough dependable damage to finish, enough protection to keep it active, and only as much control or support as the target demands.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Build the squad around the current objective: enough dependable damage to finish, enough protection to keep it active, and only as much control or support as the target demands. This is the direct answer for Damage, Control, and Support Unit Balance, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The balance is a functional worksheet. Exact ratios depend on owned units, upgrades, target, and current patch. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Damage, Control, and Support Unit Balance: Official unit examples include delayed bombs, area damage, orb attacks, a laser, and returning boomerangs. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Damage, Control, and Support Unit Balance: Helper items can be offensive or defensive. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Damage, Control, and Support Unit Balance: Eight slots impose a real opportunity cost. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Damage, Control, and Support Unit Balance: Placement-dependent heroes can change neighboring value. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Damage, Control, and Support Unit Balance",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Reserve slots for reliable damage and protection first. For Damage, Control, and Support Unit Balance, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Add area pressure or control for the observed threat. For Damage, Control, and Support Unit Balance, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Use support only when its recipient and condition are clear. For Damage, Control, and Support Unit Balance, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Keep one flexible slot for a tested substitute. For Damage, Control, and Support Unit Balance, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Damage, Control, and Support Unit Balance starts with the current state that makes this action relevant: Reserve slots for reliable damage and protection first. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Damage, Control, and Support Unit Balance starts with the current state that makes this action relevant: Add area pressure or control for the observed threat. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Damage, Control, and Support Unit Balance starts with the current state that makes this action relevant: Use support only when its recipient and condition are clear. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Damage, Control, and Support Unit Balance starts with the current state that makes this action relevant: Keep one flexible slot for a tested substitute. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Eight damage units can collapse before acting. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Too much defense can leave no finishing path. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Control may not address castle durability. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Support can become dead weight when its required neighbor falls. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Damage, Control, and Support Unit Balance evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Damage, Control, and Support Unit Balance is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Damage, Control, and Support Unit Balance, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Damage, Control, and Support Unit Balance is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Damage, Control, and Support Unit Balance. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Damage, Control, and Support Unit Balance",
        "paragraphs": [
          "Field note 1 for Damage, Control, and Support Unit Balance connects three page-specific signals. Baseline: Official unit examples include delayed bombs, area damage, orb attacks, a laser, and returning boomerangs. Operational move: Reserve slots for reliable damage and protection first. Confounder to exclude: Eight damage units can collapse before acting. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Damage, Control, and Support Unit Balance connects three page-specific signals. Baseline: Helper items can be offensive or defensive. Operational move: Add area pressure or control for the observed threat. Confounder to exclude: Too much defense can leave no finishing path. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Damage, Control, and Support Unit Balance connects three page-specific signals. Baseline: Eight slots impose a real opportunity cost. Operational move: Use support only when its recipient and condition are clear. Confounder to exclude: Control may not address castle durability. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Damage, Control, and Support Unit Balance connects three page-specific signals. Baseline: Placement-dependent heroes can change neighboring value. Operational move: Keep one flexible slot for a tested substitute. Confounder to exclude: Support can become dead weight when its required neighbor falls. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Damage, Control, and Support Unit Balance, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Damage, Control, and Support Unit Balance, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "early-team-without-rare-units",
    "category": "Core System Explainer",
    "title": "Early Game Team Without Rare Units",
    "description": "A current, source-checked guide to early game team without rare units, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Use available free or early units to cover essential jobs, then replace a slot only when the new unit solves a named weakness without breaking the formation.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Use available free or early units to cover essential jobs, then replace a slot only when the new unit solves a named weakness without breaking the formation. This is the direct answer for Early Game Team Without Rare Units, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Availability comes from the current account and official access labels; the page does not promise every named free hero is immediately unlocked. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Early Game Team Without Rare Units: Patch 1.16 labels Sir Rally and Leif as free but ties them to different arena access. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Early Game Team Without Rare Units: Wolfie is described as Battle Pass exclusive. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Early Game Team Without Rare Units: The official site mixes standard and premium unit examples. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Early Game Team Without Rare Units: The game permits more than thirty choices but never requires a rare-only launch squad. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Early Game Team Without Rare Units",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — List the units currently owned. For Early Game Team Without Rare Units, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Assign protection, damage, pressure, and support jobs. For Early Game Team Without Rare Units, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Choose the lowest-burden unit that visibly performs each job. For Early Game Team Without Rare Units, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Test the full eight before spending on a replacement. For Early Game Team Without Rare Units, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Early Game Team Without Rare Units starts with the current state that makes this action relevant: List the units currently owned. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Early Game Team Without Rare Units starts with the current state that makes this action relevant: Assign protection, damage, pressure, and support jobs. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Early Game Team Without Rare Units starts with the current state that makes this action relevant: Choose the lowest-burden unit that visibly performs each job. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Early Game Team Without Rare Units starts with the current state that makes this action relevant: Test the full eight before spending on a replacement. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Copying a rare-unit team creates inaccessible slots. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: A free unit can still require late arena access. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Replacing two roles at once hides which change mattered. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: A premium label can be mistaken for proof of superiority. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Early Game Team Without Rare Units evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Early Game Team Without Rare Units is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Early Game Team Without Rare Units, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Early Game Team Without Rare Units is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Early Game Team Without Rare Units. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Early Game Team Without Rare Units",
        "paragraphs": [
          "Field note 1 for Early Game Team Without Rare Units connects three page-specific signals. Baseline: Patch 1.16 labels Sir Rally and Leif as free but ties them to different arena access. Operational move: List the units currently owned. Confounder to exclude: Copying a rare-unit team creates inaccessible slots. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Early Game Team Without Rare Units connects three page-specific signals. Baseline: Wolfie is described as Battle Pass exclusive. Operational move: Assign protection, damage, pressure, and support jobs. Confounder to exclude: A free unit can still require late arena access. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Early Game Team Without Rare Units connects three page-specific signals. Baseline: The official site mixes standard and premium unit examples. Operational move: Choose the lowest-burden unit that visibly performs each job. Confounder to exclude: Replacing two roles at once hides which change mattered. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Early Game Team Without Rare Units connects three page-specific signals. Baseline: The game permits more than thirty choices but never requires a rare-only launch squad. Operational move: Test the full eight before spending on a replacement. Confounder to exclude: A premium label can be mistaken for proof of superiority. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Early Game Team Without Rare Units, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Early Game Team Without Rare Units, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "arena-counter-checklist",
    "category": "Blocker Walkthrough",
    "title": "Arena Loadout and Counter Checklist",
    "description": "A current, source-checked guide to arena loadout and counter checklist, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Before an arena match, identify the opponent's first threat, your protected damage source, one counter action, and the loss condition that triggers a substitution.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Before an arena match, identify the opponent's first threat, your protected damage source, one counter action, and the loss condition that triggers a substitution. This is the direct answer for Arena Loadout and Counter Checklist, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The checklist is opponent-specific and patch-aware. It does not reverse-engineer matchmaking or claim guaranteed counters. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Arena Loadout and Counter Checklist: Castle Busters uses real-time one-versus-one matches. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Arena Loadout and Counter Checklist: Players can win by eliminating enemy units or destroying the castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Arena Loadout and Counter Checklist: Patch 1.17 is actively testing a new matchmaking approach. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Arena Loadout and Counter Checklist: Wheels change castle movement and firing angles. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Arena Loadout and Counter Checklist",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Inspect the opposing layout and likely first pressure. For Arena Loadout and Counter Checklist, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Choose which win condition your squad can reach. For Arena Loadout and Counter Checklist, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Reserve a helper item or position change for the named threat. For Arena Loadout and Counter Checklist, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — After the match, record the first decisive event. For Arena Loadout and Counter Checklist, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Arena Loadout and Counter Checklist starts with the current state that makes this action relevant: Inspect the opposing layout and likely first pressure. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Arena Loadout and Counter Checklist starts with the current state that makes this action relevant: Choose which win condition your squad can reach. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Arena Loadout and Counter Checklist starts with the current state that makes this action relevant: Reserve a helper item or position change for the named threat. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Arena Loadout and Counter Checklist starts with the current state that makes this action relevant: After the match, record the first decisive event. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Changing matchmaking can distort rank-based assumptions. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Focusing units may leave the castle route open. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Chasing castle damage may ignore a dangerous support unit. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: A single favorable opponent is not evidence of a universal counter. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Arena Loadout and Counter Checklist evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Arena Loadout and Counter Checklist is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Arena Loadout and Counter Checklist, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Arena Loadout and Counter Checklist is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Arena Loadout and Counter Checklist. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Arena Loadout and Counter Checklist",
        "paragraphs": [
          "Field note 1 for Arena Loadout and Counter Checklist connects three page-specific signals. Baseline: Castle Busters uses real-time one-versus-one matches. Operational move: Inspect the opposing layout and likely first pressure. Confounder to exclude: Changing matchmaking can distort rank-based assumptions. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Arena Loadout and Counter Checklist connects three page-specific signals. Baseline: Players can win by eliminating enemy units or destroying the castle. Operational move: Choose which win condition your squad can reach. Confounder to exclude: Focusing units may leave the castle route open. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Arena Loadout and Counter Checklist connects three page-specific signals. Baseline: Patch 1.17 is actively testing a new matchmaking approach. Operational move: Reserve a helper item or position change for the named threat. Confounder to exclude: Chasing castle damage may ignore a dangerous support unit. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Arena Loadout and Counter Checklist connects three page-specific signals. Baseline: Wheels change castle movement and firing angles. Operational move: After the match, record the first decisive event. Confounder to exclude: A single favorable opponent is not evidence of a universal counter. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Arena Loadout and Counter Checklist, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Arena Loadout and Counter Checklist, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "castle-defense-objective",
    "category": "Data Tool Decision Table",
    "title": "Castle Defense Objective Guide",
    "description": "A current, source-checked guide to castle defense objective guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Defend the castle by tracing the attack path, protecting the most important structure or firing line, and testing whether movement or durability changes the first breach.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Defend the castle by tracing the attack path, protecting the most important structure or firing line, and testing whether movement or durability changes the first breach. This is the direct answer for Castle Defense Objective Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: This is an objective-defense method; exact structure health and upgrade costs remain current-client fields. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Castle Defense Objective Guide: The official rules allow victory by destroying the enemy castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Castle Defense Objective Guide: Castle structures can be upgraded for durability and defense. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Castle Defense Objective Guide: Wheels allow the castle to move around the arena. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Castle Defense Objective Guide: Patch 1.17 changed wall restoration presentation and fixed foundations UI visibility. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Castle Defense Objective Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Capture the layout before the first hit. For Castle Defense Objective Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Mark the wall or opening where pressure enters. For Castle Defense Objective Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Change one structure, position, or movement choice. For Castle Defense Objective Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Compare the time and cause of the next breach. For Castle Defense Objective Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Castle Defense Objective Guide starts with the current state that makes this action relevant: Capture the layout before the first hit. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Castle Defense Objective Guide starts with the current state that makes this action relevant: Mark the wall or opening where pressure enters. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Castle Defense Objective Guide starts with the current state that makes this action relevant: Change one structure, position, or movement choice. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Castle Defense Objective Guide starts with the current state that makes this action relevant: Compare the time and cause of the next breach. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: More durability may not fix an uncovered angle. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Movement can expose a previously safe side. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A UI fix can make old footage misleading. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Overprotecting one line can block friendly fire. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Defense Objective Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Castle Defense Objective Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Castle Defense Objective Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Castle Defense Objective Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Castle Defense Objective Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Castle Defense Objective Guide",
        "paragraphs": [
          "Field note 1 for Castle Defense Objective Guide connects three page-specific signals. Baseline: The official rules allow victory by destroying the enemy castle. Operational move: Capture the layout before the first hit. Confounder to exclude: More durability may not fix an uncovered angle. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Castle Defense Objective Guide connects three page-specific signals. Baseline: Castle structures can be upgraded for durability and defense. Operational move: Mark the wall or opening where pressure enters. Confounder to exclude: Movement can expose a previously safe side. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Castle Defense Objective Guide connects three page-specific signals. Baseline: Wheels allow the castle to move around the arena. Operational move: Change one structure, position, or movement choice. Confounder to exclude: A UI fix can make old footage misleading. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Castle Defense Objective Guide connects three page-specific signals. Baseline: Patch 1.17 changed wall restoration presentation and fixed foundations UI visibility. Operational move: Compare the time and cause of the next breach. Confounder to exclude: Overprotecting one line can block friendly fire. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Castle Defense Objective Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Castle Defense Objective Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "wheels-and-helper-items",
    "category": "Core System Explainer",
    "title": "Castle Busters Wheels and Helper Items: Stats and Picks",
    "description": "Use visible wheel stats and helper categories to test one match-specific utility without guessing undocumented Power, costs or unlocks.",
    "quickAnswer": "Use wheels when castle movement or firing angle is the problem. Use an offensive helper when you need to break defenses or pressure units, and a defensive helper when you need to survive or recover. Compare one visible option at a time; the cited sources do not define Power, exact costs, unlock levels, or one best setup.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters official feature overview",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Castle Busters patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Player question: Power Stat for Wheels",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1tlt1kg/power_stat_for_wheels/"
      },
      {
        "label": "Player question: Wheels",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1u8xtvn/wheels/"
      },
      {
        "label": "Player discussion: What to use Gems for?",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1ten4uj/what_to_use_gems_for/"
      }
    ],
    "sections": [
      {
        "heading": "Choose the utility that fixes the loss",
        "paragraphs": [
          "Start with the loss, not the equipment score. Choose a wheel for an angle or movement problem, or one helper category for pressure or survival. Replay a comparable match and keep the change only if that original problem improves.",
          "The official feature overview and patch note cited below do not provide a complete wheel or helper catalog. They also do not define the Power label, prices, Forge odds, unlock levels, or a universal best loadout. Read those fields in your current game build instead of relying on an undated tier list."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official game artwork",
          "caption": "Official Castle Busters artwork for game identification. Wheel and helper values must be checked in the current game."
        }
      },
      {
        "heading": "What the wheel screen can tell you",
        "paragraphs": [
          "The official feature overview says wheels move the castle around the arena and that wheel sets come from the Forge. It names speed and fuel as examples of wheel statistics, but it does not publish their formulas or confirm every field shown by every account.",
          "Treat the labels below differently. Movement, Forge acquisition, speed, and fuel are publicly documented. Power is a recurring player question, but the public feature page does not explain what it measures. A number beside an unexplained label is not enough to turn it into damage, durability, rarity, or matchmaking power."
        ],
        "table": {
          "columns": [
            "Wheel field",
            "What is confirmed",
            "What to do"
          ],
          "rows": [
            [
              "Movement",
              "Wheels let the castle move around the arena.",
              "Use a wheel test when position or firing angle caused the loss."
            ],
            [
              "Speed",
              "The official page lists speed as an example wheel stat.",
              "Compare the visible value and observe repositioning; do not assume a hidden formula."
            ],
            [
              "Fuel",
              "The official page lists fuel as an example wheel stat.",
              "Record the visible value and the point at which movement becomes limited in your test."
            ],
            [
              "Power",
              "Not defined in the cited official sources.",
              "Use an in-game tooltip or support answer before assigning a meaning to it."
            ]
          ]
        }
      },
      {
        "heading": "Pick a wheel with a one-match comparison",
        "paragraphs": [
          "Keep the squad, castle layout, and target as similar as possible. Capture the current wheel fields, play once, change only the wheel, then replay. The useful result is whether the original movement problem changed, not whether the equipment screen displayed a larger total.",
          "A wheel comparison is inconclusive when the opponent, terrain, layout, or squad change at the same time. Save the two visible stat cards and the match result. If the angle or repositioning problem does not improve, return to the previous wheel and test a different cause."
        ],
        "table": {
          "columns": [
            "Observed problem",
            "Wheel test",
            "Keep the change when",
            "Stop when"
          ],
          "rows": [
            [
              "A target stays outside a usable angle",
              "Change one wheel and replay the same kind of position.",
              "The castle reaches a workable angle more reliably.",
              "The firing lane stays blocked."
            ],
            [
              "Repositioning is too slow",
              "Compare the visible speed field, then repeat one movement.",
              "The move finishes soon enough to affect the turn.",
              "The timing problem remains."
            ],
            [
              "Movement ends before the desired position",
              "Compare the visible fuel field and repeat the route.",
              "The same route reaches the checkpoint.",
              "The route still falls short or another limit appears."
            ],
            [
              "Only the Power number changes",
              "Look for a current tooltip or Help Center explanation.",
              "The game defines the field and the test matches it.",
              "The meaning remains undocumented."
            ]
          ]
        },
        "visual": {
          "assetId": "castle-busters-wheels-helper-decision",
          "src": "/images/editorial/castle-busters-wheels-helper-decision.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Busters wheels or helper decision diagram",
          "caption": "Project-original decision diagram, not a gameplay screenshot: choose wheels for angle or movement, helpers for pressure or survival, then test one change."
        }
      },
      {
        "heading": "Choose helpers by timing and job",
        "paragraphs": [
          "The official site divides helper items into offensive gadgets and defensive boosts. Offensive helpers are described as tools for breaking defenses and pressuring units. Defensive helpers are described as tools for surviving pushes, recovering, and holding important moments.",
          "Start from the moment the match turns against you. If a defense or unit must be removed before it acts, test one offensive helper. If the castle or squad collapses during a push, test one defensive helper. Do not change the wheel in the same comparison, or you will not know which utility moved the result."
        ],
        "table": {
          "columns": [
            "Match problem",
            "Helper category to test",
            "Visible checkpoint"
          ],
          "rows": [
            [
              "A defense survives long enough to stop the attack",
              "Offensive gadget",
              "The named defense breaks before the same stopping point."
            ],
            [
              "Enemy units keep control of the turn",
              "Offensive gadget",
              "Pressure reaches the units early enough to change the exchange."
            ],
            [
              "The castle fails during a push",
              "Defensive boost",
              "The castle survives past the former failure point."
            ],
            [
              "A recovery effect appears unreliable",
              "Current utility or defensive helper",
              "The effect appears in the same condition after confirming the 1.17 update."
            ]
          ]
        }
      },
      {
        "heading": "Check patch 1.17 before judging a heal",
        "paragraphs": [
          "Patch 1.17 says a utility heal that failed in some situations was fixed. The note does not give the utility's inventory name, amount, trigger, or affected account range. If a healing utility behaved inconsistently in an older test, update the game and repeat the same condition before replacing it.",
          "The same patch added in-game support under Settings and a Help Center. If a stat, unlock, or utility behavior remains unclear, use the current in-game entry. The public patch note confirms that the entry exists; the exact taps after Settings may vary with the interface."
        ]
      },
      {
        "heading": "Spend only after the option is visible",
        "paragraphs": [
          "Community discussions ask whether gems should go to wheels or other utilities, but those answers reflect individual accounts and versions. The two official sources cited here do not publish current gem prices, upgrade caps, Forge odds, or a best spending order. Check the cost and outcome shown on your own screen before buying.",
          "First test an option you already own. If it solves the named match problem twice under comparable conditions, then compare its next visible cost with the next upgrade serving the same problem. Avoid spending merely because a wheel or helper increases an unexplained summary number."
        ]
      },
      {
        "heading": "Fix the common comparison mistakes",
        "paragraphs": [
          "If a faster-looking setup performs worse, check whether the route, opponent, terrain, or firing angle changed. The public source names speed and fuel fields without defining their relationship, so do not explain the result with an invented tradeoff.",
          "If a helper activates but the match still turns at the same moment, test a different category or timing. If an expected wheel or helper is missing from the Forge, record the account stage and visible Forge screen; availability reports from another player do not prove an unlock rule for your account.",
          "If Power remains unclear, leave it unresolved. A Help Center or developer support answer can define it; a larger number and a community guess cannot."
        ]
      },
      {
        "heading": "Quick wheel and helper checklist",
        "paragraphs": [
          "Name the loss first: angle, repositioning, defense pressure, or survival. Capture the current wheel and helper fields. Change one item, replay a comparable match, and check whether that exact failure moves. Keep the change only after a repeatable improvement.",
          "Recheck this page after a patch changes utilities, Forge availability, movement, or the equipment interface. Exact stats, costs, unlocks, drop rates, and Power remain current-client questions until Castle Busters publishes them."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_current_guide",
    "relatedSlugs": [
      "upgrade-materials-priority",
      "castle-busters-beginner-route",
      "castle-busters-formation"
    ]
  },
  {
    "slug": "upgrade-breakpoints-stop-rules",
    "category": "Blocker Walkthrough",
    "title": "Castle Busters Unit Upgrades: Perks, Bulk Levels, Stops",
    "description": "Understand perks and the 1.17 bulk-upgrade change, then decide whether to continue without inventing max levels, costs or perk thresholds.",
    "quickAnswer": "Unit upgrades can unlock perks and power spikes, and patch 1.17 removed the old cap that blocked more than 40 levels in one action. Neither source publishes a universal stop level, max unit level, exact perk thresholds, or current costs. Read the current unit panel, upgrade only when the expected change is visible, and pause when the next purchase has no defined purpose.",
    "updated": "September 9, 2026",
    "sources": [
      {
        "label": "Castle Busters official feature overview",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Castle Busters patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Player question: Unit upgrade cost",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1ttpoh6/unit_upgrade_cost/"
      },
      {
        "label": "Player question: Cannot upgrade new units",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vu8mrr/cant_upgrade_new_units_pressing_upgrade_does/"
      },
      {
        "label": "Player discussion: 1–100 leveling cost",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1u4q8f6/1100_leveling_cost/"
      },
      {
        "label": "Player discussion: Character progression tips",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1u7wlol/new_character_progression_tips/"
      }
    ],
    "sections": [
      {
        "heading": "What unit upgrades actually unlock",
        "paragraphs": [
          "The official Castle Busters overview says upgrading units can unlock new perks and power spikes. It does not list which unit receives which perk, the required level, the size of a stat change, or a common maximum level.",
          "That makes the current game panel the decision point. Treat a named perk or visible change on your account as a candidate reason to upgrade. A round number, a larger total, or an old player recommendation is not enough to label a level a breakpoint."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official game artwork",
          "caption": "Official Castle Busters artwork for game identification. Exact unit levels, perks and costs must be checked in the current game."
        }
      },
      {
        "heading": "Do not confuse three upgrade questions",
        "paragraphs": [
          "Bulk purchase size, perk unlock level, and maximum unit level are separate questions. Patch 1.17 answers only one of them: it removed the cap that had prevented upgrading a unit by more than 40 levels in one action.",
          "The patch note does not say that level 40 is a perk threshold, a recommended stopping point, or the maximum unit level. It also does not publish the current cost of buying many levels or promise that every account shows the same upgrade options."
        ],
        "table": {
          "columns": [
            "Question",
            "What the cited official sources say",
            "Status"
          ],
          "rows": [
            [
              "Can one action add more than 40 levels?",
              "Patch 1.17 removed the old blocking cap.",
              "Confirmed for 1.17"
            ],
            [
              "Which levels unlock perks?",
              "Unit upgrades can unlock perks, but no level table is published.",
              "Check the current unit panel"
            ],
            [
              "What is the maximum unit level?",
              "No universal maximum is listed on the two cited official pages.",
              "Unknown here"
            ],
            [
              "What does each level cost?",
              "No current unit-by-unit cost table is listed.",
              "Check before confirming"
            ]
          ]
        },
        "visual": {
          "assetId": "castle-busters-upgrade-stop-rule",
          "src": "/images/editorial/castle-busters-upgrade-stop-rule.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Busters bulk upgrade, perk unlock and maximum level comparison",
          "caption": "Project-original explainer, not a gameplay screenshot: bulk size, perk unlocks and maximum level require different evidence."
        }
      },
      {
        "heading": "Read the unit panel before confirming",
        "paragraphs": [
          "Open the unit you intend to keep using and record only the fields your current panel actually shows. Useful fields may include the unit name, present level, selected number of levels, total cost, a stated perk, and any previewed change. Do not invent a missing field or borrow a value from another account.",
          "If the panel does not show what the purchase changes, pause before committing a large batch. The 1.17 Help Center and direct support entry under Settings are the official paths for a current account-specific question; the public patch note does not reproduce their answers."
        ],
        "table": {
          "columns": [
            "Before confirmation",
            "Record",
            "Pause when"
          ],
          "rows": [
            [
              "Unit identity",
              "Exact unit and current level shown",
              "The screenshot or panel belongs to a different unit"
            ],
            [
              "Purchase size",
              "Number of levels selected, if displayed",
              "The batch size is unclear"
            ],
            [
              "Cost",
              "Current total shown on your account",
              "The value is hidden or comes from an old post"
            ],
            [
              "Expected change",
              "Named perk or visible preview, if present",
              "No purpose for the purchase is visible"
            ]
          ]
        }
      },
      {
        "heading": "Use a stop check instead of a guessed level",
        "paragraphs": [
          "A useful stopping decision starts with one expected result. Examples include surviving long enough to act, reaching a clearly displayed perk, or changing the first failure in a comparable later match. These are player tests, not official level promises.",
          "Choose the smallest visible purchase that can answer the question. Keep the formation and intended role as stable as practical, then compare the next similar match. Opponents and layouts can change, so one result is a clue; a repeated result is stronger evidence for your own account."
        ],
        "table": {
          "columns": [
            "Observed result",
            "Decision",
            "Why"
          ],
          "rows": [
            [
              "A displayed perk unlocks",
              "Test the unit in its normal role",
              "The purchase delivered a visible new condition"
            ],
            [
              "The same first failure improves twice",
              "Consider one more bounded step",
              "The upgrade may be addressing the stated problem"
            ],
            [
              "Only a summary number rises",
              "Pause and define a gameplay purpose",
              "The breakpoint is still unproven"
            ],
            [
              "The same failure remains",
              "Stop or test placement, castle or another unit",
              "More levels may be aimed at the wrong cause"
            ]
          ]
        }
      },
      {
        "heading": "Treat bulk upgrades carefully after patch 1.17",
        "paragraphs": [
          "The removal of the old 40-level single-action cap makes a larger batch possible under the patched rule. It does not make a larger batch better. Buying many levels at once can hide the exact point at which a perk appeared or a match result changed.",
          "Recent player posts ask about sudden upgrade costs, large batches that appear not to apply, and leveling milestones. Those posts show real questions worth answering, but the replies conflict and reflect different accounts and dates. Use them as research signals rather than a current rule for your spend."
        ]
      },
      {
        "heading": "Keep unit levels separate from other fixes",
        "paragraphs": [
          "The official overview describes unit upgrades and castle upgrades separately. Unit upgrades concern perks and power spikes; castle upgrades concern durability and stronger defensive options. If the castle breaks before the unit can act, the next answer may belong to the castle or formation rather than another unit level.",
          "Use the upgrade materials guide when deciding which system deserves resources, the formation guide when position or trigger conditions are failing, and the wheels guide when movement or firing angle is the bottleneck. This page begins after you have chosen a unit and need to decide how far to take the next purchase."
        ]
      },
      {
        "heading": "Questions the published sources leave open",
        "paragraphs": [
          "The two cited official pages do not provide a current maximum unit level, unit-by-unit perk thresholds, per-level damage or health growth, bulk discounts, refunds, or a universal best stopping level. They also do not define how unit level affects matchmaking.",
          "Leave those values unknown until they are visible in the current game or answered by Castle Busters support. When collecting evidence, save the unit, platform, account stage, version, date, before state, purchase, and after state so a later update can replace the unknown without turning one account into a universal rule."
        ]
      },
      {
        "heading": "Quick unit upgrade checklist",
        "paragraphs": [
          "Confirm the exact unit and current level. Separate the number of levels in one purchase from the unit maximum and perk thresholds. Read the current cost and any visible perk or change. Use the smallest purchase that answers one question, then observe a comparable match.",
          "Continue only when the expected change appears and matters in the unit’s normal role. Pause when the purpose is unclear, the same failure remains, or the advice depends only on an undated community level. Recheck this page after a patch changes unit upgrades, perks, costs, or the confirmation interface."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_current_guide",
    "relatedSlugs": [
      "upgrade-materials-priority",
      "castle-busters-formation",
      "wheels-and-helper-items"
    ]
  },
  {
    "slug": "replace-a-missing-unit",
    "category": "Data Tool Decision Table",
    "title": "How to Replace a Missing Recommended Unit",
    "description": "A current, source-checked guide to how to replace a missing recommended unit, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Replace a missing recommended unit by matching its required job, placement condition, and upgrade burden—not its rarity, appearance, or attack animation.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Replace a missing recommended unit by matching its required job, placement condition, and upgrade burden—not its rarity, appearance, or attack animation. This is the direct answer for How to Replace a Missing Recommended Unit, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Substitution means preserving the plan under stated conditions. It does not claim two units are statistically equal. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for How to Replace a Missing Recommended Unit: The roster has more than thirty units with distinct abilities. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for How to Replace a Missing Recommended Unit: A squad uses up to eight unique slots. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for How to Replace a Missing Recommended Unit: Patch 1.16 demonstrates neighbor, row, and position conditions. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for How to Replace a Missing Recommended Unit: Official examples span direct lasers, area bombs, delayed attacks, orbs, and boomerangs. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for How to Replace a Missing Recommended Unit",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Write the missing unit's essential battlefield job. For How to Replace a Missing Recommended Unit, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — List owned candidates with observable matching behavior. For How to Replace a Missing Recommended Unit, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Check whether the formation can support each condition. For How to Replace a Missing Recommended Unit, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Replay one substitute without changing other slots. For How to Replace a Missing Recommended Unit, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for How to Replace a Missing Recommended Unit starts with the current state that makes this action relevant: Write the missing unit's essential battlefield job. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for How to Replace a Missing Recommended Unit starts with the current state that makes this action relevant: List owned candidates with observable matching behavior. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for How to Replace a Missing Recommended Unit starts with the current state that makes this action relevant: Check whether the formation can support each condition. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for How to Replace a Missing Recommended Unit starts with the current state that makes this action relevant: Replay one substitute without changing other slots. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: A damage substitute may lose a required control effect. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: A similar role may demand a different row. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Upgrade burden can make the replacement impractical. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Replacing a support unit can alter several neighbors at once. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "How to Replace a Missing Recommended Unit evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of How to Replace a Missing Recommended Unit is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For How to Replace a Missing Recommended Unit, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on How to Replace a Missing Recommended Unit is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind How to Replace a Missing Recommended Unit. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for How to Replace a Missing Recommended Unit",
        "paragraphs": [
          "Field note 1 for How to Replace a Missing Recommended Unit connects three page-specific signals. Baseline: The roster has more than thirty units with distinct abilities. Operational move: Write the missing unit's essential battlefield job. Confounder to exclude: A damage substitute may lose a required control effect. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for How to Replace a Missing Recommended Unit connects three page-specific signals. Baseline: A squad uses up to eight unique slots. Operational move: List owned candidates with observable matching behavior. Confounder to exclude: A similar role may demand a different row. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for How to Replace a Missing Recommended Unit connects three page-specific signals. Baseline: Patch 1.16 demonstrates neighbor, row, and position conditions. Operational move: Check whether the formation can support each condition. Confounder to exclude: Upgrade burden can make the replacement impractical. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for How to Replace a Missing Recommended Unit connects three page-specific signals. Baseline: Official examples span direct lasers, area bombs, delayed attacks, orbs, and boomerangs. Operational move: Replay one substitute without changing other slots. Confounder to exclude: Replacing a support unit can alter several neighbors at once. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on How to Replace a Missing Recommended Unit, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for How to Replace a Missing Recommended Unit, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "formation-failure-symptoms",
    "category": "Core System Explainer",
    "title": "Common Formation Failure Symptoms",
    "description": "A current, source-checked guide to common formation failure symptoms, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Diagnose the first visible failure—frontline collapse, blocked damage, uncovered lane, mistimed helper, or castle exposure—before changing the formation.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Diagnose the first visible failure—frontline collapse, blocked damage, uncovered lane, mistimed helper, or castle exposure—before changing the formation. This is the direct answer for Common Formation Failure Symptoms, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The symptom list is diagnostic. It does not guarantee a formation fix without a controlled replay. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Common Formation Failure Symptoms: Battle outcomes can come from destroying units or the castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Common Formation Failure Symptoms: Structures, wheels, helpers, and eight units interact in one layout. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Common Formation Failure Symptoms: Patch 1.17 fixed swap position and several visual or turn-flow bugs. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Common Formation Failure Symptoms: Patch 1.16 made placement relationships strategically explicit. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Common Formation Failure Symptoms",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Record the first lost dependency. For Common Formation Failure Symptoms, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Name the formation relationship that should have protected it. For Common Formation Failure Symptoms, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Change only the relevant unit, structure, or castle position. For Common Formation Failure Symptoms, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Replay and see whether the failure happens later or changes category. For Common Formation Failure Symptoms, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Common Formation Failure Symptoms starts with the current state that makes this action relevant: Record the first lost dependency. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Common Formation Failure Symptoms starts with the current state that makes this action relevant: Name the formation relationship that should have protected it. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Common Formation Failure Symptoms starts with the current state that makes this action relevant: Change only the relevant unit, structure, or castle position. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Common Formation Failure Symptoms starts with the current state that makes this action relevant: Replay and see whether the failure happens later or changes category. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Late observations confuse symptoms with causes. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: A camera or status bug in old footage can misrepresent timing. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Moving several pieces prevents attribution. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: A lucky win can hide the same structural weakness. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Common Formation Failure Symptoms evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Common Formation Failure Symptoms is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Common Formation Failure Symptoms, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Common Formation Failure Symptoms is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Common Formation Failure Symptoms. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Common Formation Failure Symptoms",
        "paragraphs": [
          "Field note 1 for Common Formation Failure Symptoms connects three page-specific signals. Baseline: Battle outcomes can come from destroying units or the castle. Operational move: Record the first lost dependency. Confounder to exclude: Late observations confuse symptoms with causes. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Common Formation Failure Symptoms connects three page-specific signals. Baseline: Structures, wheels, helpers, and eight units interact in one layout. Operational move: Name the formation relationship that should have protected it. Confounder to exclude: A camera or status bug in old footage can misrepresent timing. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Common Formation Failure Symptoms connects three page-specific signals. Baseline: Patch 1.17 fixed swap position and several visual or turn-flow bugs. Operational move: Change only the relevant unit, structure, or castle position. Confounder to exclude: Moving several pieces prevents attribution. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Common Formation Failure Symptoms connects three page-specific signals. Baseline: Patch 1.16 made placement relationships strategically explicit. Operational move: Replay and see whether the failure happens later or changes category. Confounder to exclude: A lucky win can hide the same structural weakness. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Common Formation Failure Symptoms, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Common Formation Failure Symptoms, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "account-start-and-reroll-check",
    "category": "Blocker Walkthrough",
    "title": "Castle Busters Reroll and Account Start Guide",
    "description": "A current, source-checked guide to castle busters reroll and account start guide, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Do not reroll or restart based on an unverified tier list. First use the current account's free units, access labels, and early resources to test whether a real progression block exists.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Do not reroll or restart based on an unverified tier list. First use the current account's free units, access labels, and early resources to test whether a real progression block exists. This is the direct answer for Castle Busters Reroll and Account Start Guide, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The page intentionally rejects unsupported reroll instructions. If the current client adds a documented system, it must be captured before the guide changes. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Castle Busters Reroll and Account Start Guide: The accepted official pages do not document a reroll system. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Castle Busters Reroll and Account Start Guide: Patch 1.16 distinguishes free, arena-gated, and Battle Pass access for three heroes. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Castle Busters Reroll and Account Start Guide: The general roster includes premium and non-premium examples. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Castle Busters Reroll and Account Start Guide: Upgrade and formation choices can create a weak start without requiring a new account. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Castle Busters Reroll and Account Start Guide",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Confirm whether the current client actually offers account reset or reroll. For Castle Busters Reroll and Account Start Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — List the jobs covered by owned units. For Castle Busters Reroll and Account Start Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Test a coherent early squad before spending premium currency. For Castle Busters Reroll and Account Start Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Escalate only if an explicit irreversible block remains. For Castle Busters Reroll and Account Start Guide, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Castle Busters Reroll and Account Start Guide starts with the current state that makes this action relevant: Confirm whether the current client actually offers account reset or reroll. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Castle Busters Reroll and Account Start Guide starts with the current state that makes this action relevant: List the jobs covered by owned units. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Castle Busters Reroll and Account Start Guide starts with the current state that makes this action relevant: Test a coherent early squad before spending premium currency. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Castle Busters Reroll and Account Start Guide starts with the current state that makes this action relevant: Escalate only if an explicit irreversible block remains. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Search results may import reroll advice from another game. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: A rare recommendation may be inaccessible but unnecessary. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Resetting can erase progress without improving roles. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Patch changes can alter access after a guide is published. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Busters Reroll and Account Start Guide evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Castle Busters Reroll and Account Start Guide is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Castle Busters Reroll and Account Start Guide, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Castle Busters Reroll and Account Start Guide is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Castle Busters Reroll and Account Start Guide. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Castle Busters Reroll and Account Start Guide",
        "paragraphs": [
          "Field note 1 for Castle Busters Reroll and Account Start Guide connects three page-specific signals. Baseline: The accepted official pages do not document a reroll system. Operational move: Confirm whether the current client actually offers account reset or reroll. Confounder to exclude: Search results may import reroll advice from another game. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Castle Busters Reroll and Account Start Guide connects three page-specific signals. Baseline: Patch 1.16 distinguishes free, arena-gated, and Battle Pass access for three heroes. Operational move: List the jobs covered by owned units. Confounder to exclude: A rare recommendation may be inaccessible but unnecessary. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Castle Busters Reroll and Account Start Guide connects three page-specific signals. Baseline: The general roster includes premium and non-premium examples. Operational move: Test a coherent early squad before spending premium currency. Confounder to exclude: Resetting can erase progress without improving roles. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Castle Busters Reroll and Account Start Guide connects three page-specific signals. Baseline: Upgrade and formation choices can create a weak start without requiring a new account. Operational move: Escalate only if an explicit irreversible block remains. Confounder to exclude: Patch changes can alter access after a guide is published. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Castle Busters Reroll and Account Start Guide, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Castle Busters Reroll and Account Start Guide, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "team-testing-worksheet",
    "category": "Data Tool Decision Table",
    "title": "Versioned Team Testing Worksheet",
    "description": "A current, source-checked guide to versioned team testing worksheet, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Test teams with a fixed opponent context, layout, upgrades, and first-decisive-event record; change one slot or position per comparison.",
    "updated": "September 4, 2026",
    "sources": [
      {
        "label": "Castle Busters official site",
        "url": "https://castlebusters.com/"
      },
      {
        "label": "Official patch notes 1.17",
        "url": "https://castlebusters.com/patch-notes-1-17/"
      },
      {
        "label": "Official patch notes 1.16",
        "url": "https://www.castlebusters.com/patch-notes-1-16/"
      },
      {
        "label": "Player upgrade and synergy question",
        "url": "https://www.reddit.com/r/CastleBusters/comments/1vqla3x/need_advice_on_castle_upgrades_unit_synergy/"
      }
    ],
    "sections": [
      {
        "heading": "Quick answer and operating boundary",
        "paragraphs": [
          "Test teams with a fixed opponent context, layout, upgrades, and first-decisive-event record; change one slot or position per comparison. This is the direct answer for Versioned Team Testing Worksheet, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: The worksheet measures reproducibility, not hidden matchmaking ratings or universal win rates. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Versioned Team Testing Worksheet: Patch 1.17 is actively testing matchmaking, so opponents may not remain comparable. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Versioned Team Testing Worksheet: The game combines units, structures, wheels, helpers, and castle movement. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Versioned Team Testing Worksheet: Patch 1.16 adds explicit placement effects. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Versioned Team Testing Worksheet: A win can come from eliminating units or destroying the castle. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Versioned Team Testing Worksheet",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Save the exact eight units and positions. For Versioned Team Testing Worksheet, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Record castle, wheel, helper, and upgrade state. For Versioned Team Testing Worksheet, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Name the target and first decisive event. For Versioned Team Testing Worksheet, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Change one variable and append the result with patch date. For Versioned Team Testing Worksheet, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Versioned Team Testing Worksheet starts with the current state that makes this action relevant: Save the exact eight units and positions. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Versioned Team Testing Worksheet starts with the current state that makes this action relevant: Record castle, wheel, helper, and upgrade state. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Versioned Team Testing Worksheet starts with the current state that makes this action relevant: Name the target and first decisive event. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Versioned Team Testing Worksheet starts with the current state that makes this action relevant: Change one variable and append the result with patch date. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Different opponents invalidate a direct A/B claim. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Two changes produce an uninterpretable win. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: Recording only the final result hides the causal event. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Overwriting the old team erases the fallback. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Versioned Team Testing Worksheet evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Versioned Team Testing Worksheet is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Versioned Team Testing Worksheet, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Versioned Team Testing Worksheet is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Versioned Team Testing Worksheet. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Versioned Team Testing Worksheet",
        "paragraphs": [
          "Field note 1 for Versioned Team Testing Worksheet connects three page-specific signals. Baseline: Patch 1.17 is actively testing matchmaking, so opponents may not remain comparable. Operational move: Save the exact eight units and positions. Confounder to exclude: Different opponents invalidate a direct A/B claim. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Versioned Team Testing Worksheet connects three page-specific signals. Baseline: The game combines units, structures, wheels, helpers, and castle movement. Operational move: Record castle, wheel, helper, and upgrade state. Confounder to exclude: Two changes produce an uninterpretable win. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Versioned Team Testing Worksheet connects three page-specific signals. Baseline: Patch 1.16 adds explicit placement effects. Operational move: Name the target and first decisive event. Confounder to exclude: Recording only the final result hides the causal event. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Versioned Team Testing Worksheet connects three page-specific signals. Baseline: A win can come from eliminating units or destroying the castle. Operational move: Change one variable and append the result with patch date. Confounder to exclude: Overwriting the old team erases the fallback. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Versioned Team Testing Worksheet, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Versioned Team Testing Worksheet, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  }
];
export function getGuide(slug:string){return guides.find((guide)=>guide.slug===slug)}

export type Source={label:string;url:string};export type Visual={assetId:string;src:string;width:number;height:number;alt:string;caption:string};export type Section={heading:string;paragraphs:string[];visual?:Visual;table?:{columns:string[];rows:string[][]}};export type Guide={slug:string;category:string;title:string;description:string;quickAnswer:string;updated:string;sources:Source[];sections:Section[];evidenceClass:string;relatedSlugs?:string[]};
export const guides:Guide[]=[
  {
    "slug": "castle-busters-beginner-route",
    "category": "Beginner Progression",
    "title": "Castle Busters Beginner Progression Route",
    "description": "A resource-safe Castle Busters progression route that links early unlocks, squad stability, castle upgrades, and clear stop rules.",
    "quickAnswer": "First expand only enough to field and protect a coherent squad, then invest in the units and structures that solve the loss you can actually observe. Keep a stop rule for every upgrade category.",
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
        "heading": "Quick answer and scope",
        "paragraphs": [
          "First expand only enough to field and protect a coherent squad, then invest in the units and structures that solve the loss you can actually observe. Keep a stop rule for every upgrade category. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "This page is for one task: solve the player task described by Castle Busters Beginner Progression Route It applies to the version checked on September 4, 2026. If the current screen differs, stop at the first mismatch and use the troubleshooting section instead of forcing the route. This claim is scoped specifically to Castle Busters Beginner Progression Route."
        ]
      },
      {
        "heading": "What the accepted sources actually prove",
        "paragraphs": [
          "The official site describes real-time 1v1 battles, more than 30 units, squads of up to eight, movable castles, structures, wheels, helper items, and upgrades through multiple material tiers. Patch 1.16 adds three placement-sensitive heroes; patch 1.17 changes matchmaking, support access, upgrade behavior, and several combat or interface bugs. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "That evidence supports the game's identity and the named systems, but it does not make every neighboring value true. Official sources do not publish every unit stat or a universal tier list. Community posts prove that upgrade, synergy, and placement questions exist, but their recommendations remain player observations until corroborated. This page keeps that boundary visible so an unknown field cannot silently become a confident recommendation. This claim is scoped specifically to Castle Busters Beginner Progression Route."
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
        "heading": "The route map for this task",
        "paragraphs": [
          "This page adds a bounded route map, a current-version evidence boundary, and a recovery path for Castle Busters Beginner Progression Route. It is designed to answer the named task without importing unsupported details from a similar game or an older build. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "Use the route map as a decision aid, not as decoration. Read the required input, choose the next action, note the expected visible output, and keep the fallback beside it. If any required input is unknown, the safe action is to gather that evidence before spending currency or committing progress. This claim is scoped specifically to Castle Busters Beginner Progression Route."
        ]
      },
      {
        "heading": "Run the route without mixing variables",
        "paragraphs": [
          "Start by naming the current bottleneck in one sentence. Then follow this bounded answer: First expand only enough to field and protect a coherent squad, then invest in the units and structures that solve the loss you can actually observe. Keep a stop rule for every upgrade category. Change only the element, item, unit position, ship choice, or progression action directly tied to that bottleneck. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "After the action, return to the same screen or encounter and compare the result. A successful outcome without a stable baseline is useful for play but weak as evidence. A failed outcome with a clean baseline is valuable because it tells the next player which assumption not to repeat. This claim is scoped specifically to Castle Busters Beginner Progression Route."
        ]
      },
      {
        "heading": "Decision table",
        "paragraphs": [
          "Use four columns: current state, available choice, expected benefit, and stop condition. Current state must come from the live game. Available choice must be visible or explicitly documented. Expected benefit may be a hypothesis, but it must be labelled as one. Stop condition prevents an open-ended upgrade or experiment from consuming resources without solving the original task. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "Verify identity and system boundaries with the cited first-party source, then confirm version-sensitive conditions in the current client or with two independent current sources. A repeatable current observation may be labelled verified. One clean observation is partial. A missing label, result, or repeat remains unknown; none of those states should be converted into zero. This claim is scoped specifically to Castle Busters Beginner Progression Route."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Castle Busters editorial decision framework",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Define the first stable squad",
        "paragraphs": [
          "The official game description allows squads of up to eight units, but an early player should not treat eight slots as eight separate upgrade projects. First identify a protected source of reliable damage, a unit or structure that buys it time, and one answer to the pressure that most often ends the battle. Fill remaining slots with available support or substitutes, then test the group before raising every member evenly.",
          "A stable squad is not one that wins once. It reaches the same useful firing positions, survives the same opening pressure, and fails for a recognizable reason. Record whether the loss came from the castle breaking, damage arriving too slowly, a lane going uncovered, or a placement-dependent effect missing its target. The category of failure determines the next investment."
        ]
      },
      {
        "heading": "Spend by bottleneck, not by notification",
        "paragraphs": [
          "Upgrade prompts create urgency, but the route should follow evidence. If the front line collapses before damage starts, improve protection or placement first. If the formation survives but cannot finish, improve the dependable damage source. If one lane or target type remains unanswered, change a slot before spending broadly. A new unlock joins the test roster; it does not automatically replace a proven role.",
          "Use a stop rule for each material tier: buy only the smallest upgrade that can change the observed failure, replay the same target, and stop if the failure category does not move. The official site confirms several upgrade material tiers, but it does not publish a universal economic optimum. That makes controlled replay safer than a fixed spending chart copied from another account."
        ]
      },
      {
        "heading": "Add structures and movable castles deliberately",
        "paragraphs": [
          "Castle Busters includes structures, wheels, and helper items in addition to units. Evaluate them as parts of the battle plan. A movable castle changes angles and exposure; a structure may protect, obstruct, or support a firing line; a helper item may solve a temporary problem without deserving permanent investment. Test the battlefield effect before assigning it a long-term priority.",
          "When movement improves one side but exposes another, document the trade rather than calling the position best. Keep a simple before-and-after record: starting formation, first contact, first unit lost, castle condition, and final outcome. Those five observations are enough to distinguish a positioning improvement from a lucky sequence without inventing hidden combat numbers."
        ]
      },
      {
        "heading": "Progression checkpoints and reset conditions",
        "paragraphs": [
          "At each new unlock, pause and ask whether it fills an absent role, duplicates a working role, or requires an untested placement. Only the first category deserves immediate consideration. A duplicate becomes a substitute candidate; a placement-dependent unit belongs in a controlled formation test. Patch 1.16 specifically makes placement relevant to new hero behavior, so the checkpoint must include formation rather than judging the unit in isolation.",
          "Reset the plan when a patch changes unit behavior, the available material tier changes, or the same squad begins failing to a different pressure. Do not reset merely because a new rarity appears. The route succeeds when the player can explain the next upgrade in terms of a current battle problem and can name the condition that will stop further spending."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Confirm the exact game, platform, current version, task, prerequisite, chosen action, expected visible result, recovery option, and evidence state. If all nine are clear, execute the smallest useful action. If one is missing, collect it before committing a scarce resource. This claim is scoped specifically to Castle Busters Beginner Progression Route.",
          "The short rule remains: First expand only enough to field and protect a coherent squad, then invest in the units and structures that solve the loss you can actually observe. Keep a stop rule for every upgrade category. Verify the visible result, save the date, and leave unsupported precision unknown. This claim is scoped specifically to Castle Busters Beginner Progression Route."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page"
  },
  {
    "slug": "castle-busters-unit-database",
    "category": "Units",
    "title": "Castle Busters Units: Eight Named Skills and Access Notes",
    "description": "Look up eight Castle Busters units, their documented attacks or skill conditions, and access notes from the official site and patches 1.16–1.17.",
    "quickAnswer": "Sir Rally boosts nearby allied heroes, Leif revives fallen allies in his row after he kills an enemy unit, and Wolfie transforms after a neighboring ally dies. The table also covers Bishop, Wrecker, Fairy, Pulsar and Saxton. It is a partial unit reference.",
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
        "heading": "Look up a unit by name",
        "paragraphs": [
          "Find the exact unit name in the first column. Read its behavior together with the access and source-context columns.",
          "The access column keeps the source’s own context. “Free at Arena 7” does not mean Sir Rally is already owned, and Leif’s Arena 25 listing does not make him an Arena 7 starter. Wolfie’s Battle Pass label comes from patch 1.16; it does not identify the current season’s availability."
        ],
        "table": {
          "columns": [
            "Unit",
            "Attack or skill",
            "Access described by the source",
            "Source context"
          ],
          "rows": [
            [
              "Sir Rally",
              "Raises the damage of allied heroes immediately around him.",
              "Free at Arena 7.",
              "Patch 1.16; patch 1.17 adds a cast delay."
            ],
            [
              "Leif",
              "Revives fallen allies in his row when he kills an enemy unit.",
              "Free at Arena 25.",
              "Patch 1.16."
            ],
            [
              "Wolfie",
              "Transforms and gains attack strength after a neighboring ally dies.",
              "Battle Pass exclusive.",
              "Patch 1.16."
            ],
            [
              "Bishop",
              "Uses a bomb with a delayed explosion.",
              "Described as premium; no exact unlock listed.",
              "Undated official unit description."
            ],
            [
              "Wrecker",
              "Fires a single bomb that deals area damage.",
              "Not specified in the description.",
              "Undated official unit description."
            ],
            [
              "Fairy",
              "Attacks with descending orbs.",
              "Described as premium; no exact unlock listed.",
              "Undated official unit description."
            ],
            [
              "Pulsar",
              "Fires a laser in the aimed direction.",
              "Not specified in the description.",
              "Undated official unit description."
            ],
            [
              "Saxton",
              "Throws three boomerangs that return to the castle.",
              "Not specified in the description.",
              "Undated official unit description."
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
        "heading": "Keep the source version with the entry",
        "paragraphs": [
          "Patch 1.16 introduced Sir Rally, Leif and Wolfie and completed the rollout of updated hero visuals. An older portrait therefore needs an exact name match before it can be used to identify one of these entries.",
          "Patch 1.17 added a cast delay to Sir Rally. The note does not give its duration.",
          "The official site advertises more than thirty units. These eight descriptions form a partial reference, not the complete roster. Attack and health values, unlisted unlocks and unit rankings are not supplied by this table."
        ]
      },
      {
        "heading": "Compare access and formation conditions",
        "paragraphs": [
          "Use the loadout conditions guide next for the unit limit and access comparison. Use the formation rules guide for the difference between Sir Rally’s nearby allies, Leif’s same-row revival and Wolfie’s neighboring-death condition."
        ]
      }
    ],
    "evidenceClass": "claim_bounded_core_page",
    "relatedSlugs": [
      "castle-busters-eight-unit-loadout",
      "castle-busters-formation",
      "patch-notes-and-balance-log"
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
    "title": "Upgrade Materials and Resource Priority",
    "description": "A current, source-checked guide to upgrade materials and resource priority, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Upgrade the part that causes the current loss, buy the smallest meaningful change, replay the same matchup, and stop if the failure category does not move.",
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
          "Upgrade the part that causes the current loss, buy the smallest meaningful change, replay the same matchup, and stop if the failure category does not move. This is the direct answer for Upgrade Materials and Resource Priority, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Material names and patch behavior are verified; costs, breakpoints, and best order must come from the current account. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Upgrade Materials and Resource Priority: The official site names material tiers from wood and stone through diamond and magma. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Upgrade Materials and Resource Priority: Units, castle structures, wheels, and helper items all compete for attention. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Upgrade Materials and Resource Priority: Patch 1.17 removed a cap that blocked upgrading a unit more than forty levels in one action. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Upgrade Materials and Resource Priority: No official universal resource priority is published. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Upgrade Materials and Resource Priority",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Name the first decisive failure in the last match. For Upgrade Materials and Resource Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Choose the unit, structure, or mobility system tied to it. For Upgrade Materials and Resource Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Spend one bounded material step. For Upgrade Materials and Resource Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Replay before opening a second upgrade path. For Upgrade Materials and Resource Priority, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Upgrade Materials and Resource Priority starts with the current state that makes this action relevant: Name the first decisive failure in the last match. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Upgrade Materials and Resource Priority starts with the current state that makes this action relevant: Choose the unit, structure, or mobility system tied to it. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Upgrade Materials and Resource Priority starts with the current state that makes this action relevant: Spend one bounded material step. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Upgrade Materials and Resource Priority starts with the current state that makes this action relevant: Replay before opening a second upgrade path. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Even spending creates several underpowered systems. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: A notification can be mistaken for priority. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A large multi-level upgrade can overshoot the test. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Matchmaking changes can make before-and-after opponents incomparable. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Upgrade Materials and Resource Priority evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Upgrade Materials and Resource Priority is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Upgrade Materials and Resource Priority, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Upgrade Materials and Resource Priority is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Upgrade Materials and Resource Priority. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Upgrade Materials and Resource Priority",
        "paragraphs": [
          "Field note 1 for Upgrade Materials and Resource Priority connects three page-specific signals. Baseline: The official site names material tiers from wood and stone through diamond and magma. Operational move: Name the first decisive failure in the last match. Confounder to exclude: Even spending creates several underpowered systems. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Upgrade Materials and Resource Priority connects three page-specific signals. Baseline: Units, castle structures, wheels, and helper items all compete for attention. Operational move: Choose the unit, structure, or mobility system tied to it. Confounder to exclude: A notification can be mistaken for priority. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Upgrade Materials and Resource Priority connects three page-specific signals. Baseline: Patch 1.17 removed a cap that blocked upgrading a unit more than forty levels in one action. Operational move: Spend one bounded material step. Confounder to exclude: A large multi-level upgrade can overshoot the test. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Upgrade Materials and Resource Priority connects three page-specific signals. Baseline: No official universal resource priority is published. Operational move: Replay before opening a second upgrade path. Confounder to exclude: Matchmaking changes can make before-and-after opponents incomparable. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Upgrade Materials and Resource Priority, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Upgrade Materials and Resource Priority, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
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
    "title": "Wheel and Auxiliary Item Priorities",
    "description": "A current, source-checked guide to wheel and auxiliary item priorities, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Choose wheels for the movement problem you actually have and helper items for one timed match problem; do not spend on them as generic power.",
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
          "Choose wheels for the movement problem you actually have and helper items for one timed match problem; do not spend on them as generic power. This is the direct answer for Wheel and Auxiliary Item Priorities, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: No complete item catalog or universal Forge priority is claimed; availability and numbers must be read from the current client. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Wheel and Auxiliary Item Priorities: Official material says wheel sets come through the Forge and have different speed and fuel statistics. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Wheel and Auxiliary Item Priorities: Wheels reposition the castle for angles. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Wheel and Auxiliary Item Priorities: Helper items also come through the Forge. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Wheel and Auxiliary Item Priorities: Helpers include offensive gadgets and defensive boosts in the official description. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Wheel and Auxiliary Item Priorities",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Decide whether the plan needs reach, repositioning, survival, or burst pressure. For Wheel and Auxiliary Item Priorities, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Compare only visible wheel or helper fields. For Wheel and Auxiliary Item Priorities, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Equip one change and keep the squad fixed. For Wheel and Auxiliary Item Priorities, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Replay the same target and record whether the timing problem moved. For Wheel and Auxiliary Item Priorities, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Wheel and Auxiliary Item Priorities starts with the current state that makes this action relevant: Decide whether the plan needs reach, repositioning, survival, or burst pressure. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Wheel and Auxiliary Item Priorities starts with the current state that makes this action relevant: Compare only visible wheel or helper fields. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Wheel and Auxiliary Item Priorities starts with the current state that makes this action relevant: Equip one change and keep the squad fixed. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Wheel and Auxiliary Item Priorities starts with the current state that makes this action relevant: Replay the same target and record whether the timing problem moved. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Faster movement may consume fuel too quickly. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: An offensive helper can arrive after the decisive loss. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A defensive boost may protect the wrong line. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: Changing wheels and helpers together hides the useful component. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Wheel and Auxiliary Item Priorities evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Wheel and Auxiliary Item Priorities is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Wheel and Auxiliary Item Priorities, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Wheel and Auxiliary Item Priorities is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Wheel and Auxiliary Item Priorities. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Wheel and Auxiliary Item Priorities",
        "paragraphs": [
          "Field note 1 for Wheel and Auxiliary Item Priorities connects three page-specific signals. Baseline: Official material says wheel sets come through the Forge and have different speed and fuel statistics. Operational move: Decide whether the plan needs reach, repositioning, survival, or burst pressure. Confounder to exclude: Faster movement may consume fuel too quickly. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Wheel and Auxiliary Item Priorities connects three page-specific signals. Baseline: Wheels reposition the castle for angles. Operational move: Compare only visible wheel or helper fields. Confounder to exclude: An offensive helper can arrive after the decisive loss. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Wheel and Auxiliary Item Priorities connects three page-specific signals. Baseline: Helper items also come through the Forge. Operational move: Equip one change and keep the squad fixed. Confounder to exclude: A defensive boost may protect the wrong line. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Wheel and Auxiliary Item Priorities connects three page-specific signals. Baseline: Helpers include offensive gadgets and defensive boosts in the official description. Operational move: Replay the same target and record whether the timing problem moved. Confounder to exclude: Changing wheels and helpers together hides the useful component. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Wheel and Auxiliary Item Priorities, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Wheel and Auxiliary Item Priorities, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
  },
  {
    "slug": "upgrade-breakpoints-stop-rules",
    "category": "Blocker Walkthrough",
    "title": "Unit Upgrade Breakpoints and Stop Rules",
    "description": "A current, source-checked guide to unit upgrade breakpoints and stop rules, with practical steps, failure fixes, and clear evidence limits.",
    "quickAnswer": "Set an upgrade stop rule before spending: the next level must alter survivability, timing, perk access, or the diagnosed failure in a replay.",
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
          "Set an upgrade stop rule before spending: the next level must alter survivability, timing, perk access, or the diagnosed failure in a replay. This is the direct answer for Unit Upgrade Breakpoints and Stop Rules, checked against the sources and observations available on September 4, 2026.",
          "Scope boundary: Breakpoints are recorded only when the live account shows the level, perk, and result; otherwise the page provides stop rules, not numbers. The page distinguishes verified facts, a single current observation, an actionable hypothesis, and an unknown field. Those states stay visible because a useful answer is more trustworthy when it says exactly where evidence ends."
        ]
      },
      {
        "heading": "What is verified now",
        "paragraphs": [
          "Verified point 1 for Unit Upgrade Breakpoints and Stop Rules: The official site says unit upgrades unlock perks and power spikes. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 2 for Unit Upgrade Breakpoints and Stop Rules: Castle upgrades increase durability and defensive options. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 3 for Unit Upgrade Breakpoints and Stop Rules: Patch 1.17 removed a forty-level single-action cap. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs.",
          "Verified point 4 for Unit Upgrade Breakpoints and Stop Rules: Material progression reaches multiple named tiers. This point is kept separate from neighboring assumptions so a visible label, an official feature description, or a dated patch statement does not silently authorize an unstated number or universal strategy. Use it as the fixed baseline for the next decision, and recheck the cited source when the live interface differs."
        ],
        "visual": {
          "assetId": "castle-busters-guide-official-01",
          "src": "/images/official/castle-busters-guide-official-01.webp",
          "width": 1000,
          "height": 1000,
          "alt": "Castle Busters official public media for Unit Upgrade Breakpoints and Stop Rules",
          "caption": "Official public media used for recognition; verify current values and availability in the live game."
        }
      },
      {
        "heading": "Step-by-step route",
        "paragraphs": [
          "Step 1 — Write the expected visible change. For Unit Upgrade Breakpoints and Stop Rules, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 2 — Buy the smallest step that can produce it. For Unit Upgrade Breakpoints and Stop Rules, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 3 — Replay with the same formation. For Unit Upgrade Breakpoints and Stop Rules, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step.",
          "Step 4 — Stop or redirect resources if the first decisive failure remains unchanged. For Unit Upgrade Breakpoints and Stop Rules, record the screen or state before acting, make only this bounded change, and note the first visible result. Keep any currency, inventory, formation, map, element, or mission value that was not displayed out of the claim. If the expected checkpoint is missing, stop here rather than carrying an uncertain premise into the next step."
        ]
      },
      {
        "heading": "Decision table in practice",
        "paragraphs": [
          "Decision row 1 for Unit Upgrade Breakpoints and Stop Rules starts with the current state that makes this action relevant: Write the expected visible change. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 2 for Unit Upgrade Breakpoints and Stop Rules starts with the current state that makes this action relevant: Buy the smallest step that can produce it. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 3 for Unit Upgrade Breakpoints and Stop Rules starts with the current state that makes this action relevant: Replay with the same formation. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible.",
          "Decision row 4 for Unit Upgrade Breakpoints and Stop Rules starts with the current state that makes this action relevant: Stop or redirect resources if the first decisive failure remains unchanged. The available choice must be visible in the current client or stated by a cited first-party source. The expected benefit is a testable hypothesis until the result appears. The stop condition is reached when the named bottleneck does not move after one clean comparison or when a new prerequisite becomes visible."
        ]
      },
      {
        "heading": "Failure symptoms and recovery",
        "paragraphs": [
          "Failure pattern 1: Round-number milestones can be mistaken for actual breakpoints. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 2: Bulk upgrades can consume several test steps at once. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 3: A new perk may require a level not yet verified. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way.",
          "Failure pattern 4: A stronger unit can still fail from bad placement. Diagnose this possibility before spending more or publishing a correction. Recreate the smallest relevant setup, compare it with the saved baseline, and change one condition. A single mismatch makes the current route partial; it does not prove that every platform, account stage, opponent, geometry, or later version behaves the same way."
        ],
        "visual": {
          "assetId": "castle-busters-guide-editorial-01",
          "src": "/images/editorial/castle-busters-guide-editorial-01.webp",
          "width": 1600,
          "height": 900,
          "alt": "Unit Upgrade Breakpoints and Stop Rules evidence and decision workflow",
          "caption": "Project-original editorial diagram based on the cited evidence; not a gameplay screenshot."
        }
      },
      {
        "heading": "Version, source, and update rules",
        "paragraphs": [
          "The public version of Unit Upgrade Breakpoints and Stop Rules is dated September 4, 2026. Recheck it after a patch, interface change, economy change, altered tutorial, or repeated current-player contradiction that touches the named task. Keep the former observation with its date, append the replacement, and state which client, platform, account stage, and screen supplied the new result.",
          "For Unit Upgrade Breakpoints and Stop Rules, first-party documentation establishes identity and explicit mechanics. A current live-client observation can establish what one account displayed. Two independent current observations can strengthen a variable behavior. Search snippets, old videos, and similar game names may open a research task, but they cannot overwrite a verified row without matching the exact game and version."
        ]
      },
      {
        "heading": "How to use the page visuals",
        "paragraphs": [
          "The official or platform image on Unit Upgrade Breakpoints and Stop Rules is a recognition aid for the correct game and interface family. It does not prove every value, availability rule, or optimal choice shown elsewhere on the page. Compare visual landmarks with the live client before following a position, item, element, map, or menu instruction.",
          "The labelled editorial diagram expresses the decision path behind Unit Upgrade Breakpoints and Stop Rules. It is original explanatory artwork, not a gameplay screenshot. Follow its sequence—baseline, bounded action, visible checkpoint, stop condition, and evidence state—when the live scene differs from the promotional image."
        ]
      },
      {
        "heading": "Field notes for Unit Upgrade Breakpoints and Stop Rules",
        "paragraphs": [
          "Field note 1 for Unit Upgrade Breakpoints and Stop Rules connects three page-specific signals. Baseline: The official site says unit upgrades unlock perks and power spikes. Operational move: Write the expected visible change. Confounder to exclude: Round-number milestones can be mistaken for actual breakpoints. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 2 for Unit Upgrade Breakpoints and Stop Rules connects three page-specific signals. Baseline: Castle upgrades increase durability and defensive options. Operational move: Buy the smallest step that can produce it. Confounder to exclude: Bulk upgrades can consume several test steps at once. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 3 for Unit Upgrade Breakpoints and Stop Rules connects three page-specific signals. Baseline: Patch 1.17 removed a forty-level single-action cap. Operational move: Replay with the same formation. Confounder to exclude: A new perk may require a level not yet verified. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away.",
          "Field note 4 for Unit Upgrade Breakpoints and Stop Rules connects three page-specific signals. Baseline: Material progression reaches multiple named tiers. Operational move: Stop or redirect resources if the first decisive failure remains unchanged. Confounder to exclude: A stronger unit can still fail from bad placement. Write those three lines beside the live screen before the test. The result is useful only when the baseline remains identifiable, the operational move is the only intentional change, and the confounder has been checked rather than assumed away."
        ]
      },
      {
        "heading": "Final verification checklist",
        "paragraphs": [
          "Before acting on Unit Upgrade Breakpoints and Stop Rules, confirm the exact game, current platform, visible task, prerequisite, available choice, expected checkpoint, recovery path, version date, and evidence state. If one field is missing, collect it first. This checklist prevents an attractive but unsupported shortcut from consuming currency, progress, board space, or a limited test opportunity.",
          "After the result for Unit Upgrade Breakpoints and Stop Rules, save what changed and what did not. If this specific task is complete, stop. If its failure category changed, use that new bottleneck to choose the next guide. If nothing changed after a clean comparison, preserve the evidence and escalate the exact unresolved condition instead of repeating the same broad action."
        ]
      }
    ],
    "evidenceClass": "source_bounded_launch_page"
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

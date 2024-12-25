const abilityDescriptions = [
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.GreekMathematician_1_Name",
        "values": [
            "<style=ability_label>Stomp</style>Stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JoanOfArc_30_Name",
        "values": [
            "<style=ability_label>Area Strike| Heal| Buff</style>Calls for divine assistance targeting the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Also heals all friendly units in the same area by <style=basestat>{hp_percentage}</style> of Joan's base damage. Affected friendly units gain <style=basestat>{atk_percentage}</style> of Joan's ATK as ATK and <style=basestat>{atkspeed_percentage}</style> ATK Speed for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MansaMusa_15_Name",
        "values": [
            "<style=ability_label>Buff</style>Mansa Musa targets the biggest cluster of friendly units, increasing their chance to critically hit by <style=basestat>{crit_percentage}</style>, their ATK by <style=basestat>{atk_percentage}</style> of Mansa Musa's ATK, and their critical damage by <style=basestat>{crit_dmg_percentage}</style> for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RamsesII_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Targets the biggest cluster of friendly units, increasing their ATK by <style=basestat>{atk_percentage}</style> of Ramses' ATK, their movement speed by <style=basestat>{move_percentage}</style>, their Accuracy by <style=basestat>{accuracy_percentage}</style>, their critical damage by <style=basestat>{crit_dmg_percentage}</style>, and their chance to critically hit by <style=basestat>{crit_chance_percentage}</style> for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Achilles_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff</style>Unleashes extraordinary strength by striking the current target for <style=basestat>{dmg_percentage}</style> damage. Achilles then gains a surge of swiftness, increasing his ATK speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{atk_speed_duration}</style> . "
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.BessieColeman_1_Name",
        "values": [
            "<style=ability_label>Debuff </style>Bessie launches smoke flares at the closest and furthest enemy units while prioritizing heroes, dealing <style=basestat>{damage}</style> damage and reducing  accuracy by <style=basestat>{accuracy_debuff}</style> for <style=basestat>{accuracy_debuff_duration}</style> to them."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AshokaTheGreat_5_Name",
        "values": [
            "<style=ability_label>Heal</style>Channels divine energy, healing the two targets with the most missing HP by <style=basestat>{heal_percentage}</style> and <style=basestat>{heal_percentage_2}</style> of Ashoka's base damage respectively. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MargaretIOfDenmark_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Inspires all friendly units, increasing their attack speed by <style=basestat>{atk_speed_percentage}</style> and their ATK by <style=basestat>{atk_percentage}</style> of Margaret's ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Hatshepsut_1_Name",
        "values": [
            "<style=ability_label>Heal| Focus</style>Draws energy from fertile ground, healing all friendly units by <style=basestat>{heal_percentage}</style> of her base damage and granting them <style=basestat>{focus_duration}</style> worth of focus instantly."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.OttoVonBismarck_15_Name",
        "values": [
            "<style=ability_label>Taunt| Shield</style>Taunts all enemies for <style=basestat>{taunt_duration}</style>. Bismarck gains <style=basestat>{shield_percentage}</style> of his base damage as a shield. Also provides <style=basestat>{shield_percentage_friendly}</style> of Bismarck's base damage as a shield to the friendly unit with the lowest HP. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.QueenElizabethI_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Inspires all friendly units, increasing their attack speed by <style=basestat>{atk_speed_percentage}</style>, their ATK by <style=basestat>{atk_percentage}</style> of Elizabeth's ATK, their critical damage by <style=basestat>{crit_dmg_percentage}</style>, and their chance to critically hit by <style=basestat>{crit_chance_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.UlyssesSGrant_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Ranged Strike| Recovery</style>Strikes the current target for <style=basestat>{dmg_percentage_current}</style> damage, before shooting at the enemy with the lowest DEF, dealing <style=basestat>{dmg_percentage_def}</style> damage. Then Ulysses heals himself for <style=basestat>{heal_percentage}</style> of his base damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JoanOfArc_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Heal</style>Calls for divine assistance targeting the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Also heals the biggest cluster of friendly units by <style=basestat>{hp_percentage}</style> of Joan's base damage in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.OttomanGeneral_Name",
        "values": [
            "<style=ability_label>Taunt| Buff</style>Taunts all enemy units for <style=basestat>{duration}</style>. During this time, Hasan Pasha's DEF is increased by <style=basestat>{def_percentage}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.QueenBoudicca_10_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Stun</style>Throws her spear at the furthest target, hitting them for <style=basestat>{dmg_percentage}</style> damage and leaving them stunned for <style=basestat>{duration}</style>. Enemy units around the target take <style=basestat>{dmg_percentage_around}</style> damage. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.CyrusTheGreat_1_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Causes an explosion on the current target, dealing <style=basestat>{dmg_percentage}</style> to all enemy units within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Plato_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Plato speaks in allegories, confusing enemy units and decreasing their accuracy by <style=basestat>{accuracy_percentage}</style> and ATK by <style=basestat>{atk_percentage}</style> of Plato's ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MiyamotoMusashi_1_Name",
        "values": [
            "<style=ability_label>Melee Strike</style>Strikes the current target four times for a total of <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Hoplit_1_Name",
        "values": [
            "<style=ability_label>Melee Strike</style>Pierces the current target with a spear, dealing <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SirLancelot_22_Name",
        "values": [
            "<style=ability_label>Melee Strike| Bleed| Buff</style>Swings his sword at his current target five times, dealing increased damage with each strike for a total of <style=basestat>{dmg_percentage}</style> damage. Each strike has a <style=basestat>{chance_percentage}</style> chance to let the opponent bleed for <style=basestat>{dmg_percentage_bleed}</style> damage over <style=basestat>{duration}</style>. Also increases Lancelot's critical damage by <style=basestat>{crit_dmg_percentage}</style> for <style=basestat>{buff_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Ninja_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike</style>Throws a kunai at the enemy with the lowest current HP, dealing <style=basestat>{dmg_percentage}</style> damage. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SiouxShaman_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Targets the biggest cluster of friendly units, increasing DEF by <style=basestat>{def_percentage}</style> of Sitting Bull's DEF for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MargaretIOfDenmark_15_Name",
        "values": [
            "<style=ability_label>Buff</style>Inspires all friendly units, increasing their attack speed by <style=basestat>{atk_speed_percentage}</style>, their ATK by <style=basestat>{atk_percentage}</style> of Margaret's ATK, and their critical damage by <style=basestat>{crit_dmg_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.BenjaminFranklin_1_Name",
        "values": [
            "<style=ability_label>Debuff | Ability Block</style>Inhibits all enemy units' ability to attack, decreasing their Accuracy by <style=basestat>{accuracy_percentage}</style>, their ATK Speed by <style=basestat>{atk_speed_percentage}</style>, and their ATK by <style=basestat>{atk_percentage}</style> of Franklin's ATK for <style=basestat>{duration}</style>. Also prevents enemies from using Abilities for <style=basestat>{block_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.WilliamTell_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike</style>Aims his crossbow at the furthest target, shooting them for <style=basestat>{dmg_percentage}</style> damage. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.KingMinos_9_Name",
        "values": [
            "<style=ability_label>Taunt| Shield| Buff</style>Pounds his chest, taunting all enemies for <style=basestat>{taunt_duration}</style>, gaining <style=basestat>{shield_percentage}</style> of DEF as a shield, and increasing DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Pythagoras_1_Name",
        "values": [
            "<style=ability_label>Summon</style>Throws his triangle ruler at the current target. For <style=basestat>{duration}</style>, the ruler will move across the battlefield in a triangular shape and deal up to <style=basestat>{dmg_percentage}</style> damage to nearby enemy units."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Spartacus_16_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff</style>Slashes the current target four times, dealing increased damage with each strike for a total of <style=basestat>{dmg_percentage}</style> damage. Also increases Spartacus' crit chance by <style=basestat>{crit_percentage}</style> and his crit damage by <style=basestat>{crit_dmg_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JaneAusten_1_Name",
        "values": [
            "<style=ability_label>Mind Control| Buff</style>Unleashes her literary genius, convincing an enemy unit to attack their allies for <style=basestat>{duration}</style>. While under Jane's control, the enemy unit's ATK is increased by <style=basestat>{atk_percentage}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.VikingRaider_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike</style>Throws an axe at the enemy unit with the most HP, dealing <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RomanPraetor_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Targets the biggest cluster of enemy units, reducing ATK by <style=basestat>{atk_percentage}</style> of Aemilia Tertia's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.NubianMercenary_1_Name",
        "values": [
            "<style=ability_label>Melee Strike</style>Stikes the current target twice for a total of <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Charlemagne_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Debuff</style>Strikes the current target, causing an explosion that deals <style=basestat>{dmg_percentage}</style> damage to all enemy units in a range of <style=basestat>{range}</style> around the target and reduces their ATK Speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.TomoeGozen_21_Name",
        "values": [
            "<style=ability_label>Stomp| Bleed| Stun</style>Tomoe strikes the ground with her spear, unleashing a shockwave that deals <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style>. Affected units have a <style=basestat>{bleed_chance}</style> chance to bleed for an additional <style=basestat>{bleed_percentage}</style> damage over <style=basestat>{bleed_duration}</style> and a <style=basestat>{stun_chance}</style> to be stunned for <style=basestat>{stun_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Dartagnan_Name",
        "values": [
            "<style=ability_label>Melee Strike| Bleed</style>Pierces the current target four times, dealing increased damage with each stab for a total of <style=basestat>{dmg_percentage}</style> damage. Each stab has a <style=basestat>{chance_percentage}</style> chance to let the opponent bleed for <style=basestat>{dmg_percentage_bleed}</style> over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MaoriChief_1_Name",
        "values": [
            "<style=ability_label>Shield</style>Invokes the power of water targeting the biggest cluster of friendly units, providing <style=basestat>{shield_percentage}</style> of Te Wherowhero's Base Damage as a shield in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.ThomasAlvaEdison_1_Name",
        "values": [
            "<style=ability_label>Teleport| Stomp</style>Teleports into the largest cluster of enemy units, causing an explosion on arrival. The explosion deals <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Edison then gains  <style=basestat>{attack_speed_buff}</style> attack speed for the rest of the wave."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AlbertEinstein_1_Name",
        "values": [
            "<style=ability_label>Summon</style>Manipulates the space-time continuum to create a black hole at the location of Einstein's current target. The black hole will move across the battlefield in a spiral shape for <style=basestat>{duration}</style>, dealing up to <style=basestat>{dmg_percentage}</style> damage to nearby enemy units and cripples their attack speed by <style=basestat>{atk_speed_slow}</style> while near it.."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RobinHood_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Burn</style>Shoots an arrow at the furthest target, hitting them for <style=basestat>{dmg_percentage}</style> damage and burning them for a further <style=basestat>{burn_percentage}</style> damage over <style=basestat>{burn_duration}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RobinHood_10_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Burn| Bleed</style>Shoots an arrow at the furthest target, hitting them for <style=basestat>{dmg_percentage}</style> damage and burning them for a further <style=basestat>{burn_percentage}</style> damage over <style=basestat>{burn_duration}</style>. Has a <style=basestat>{chance}</style> chance to also let the target bleed for <style=basestat>{bleed_percentage}</style> over <style=basestat>{bleed_duration}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SunTzu_20_Name",
        "values": [
            "<style=ability_label>Melee Strike| Debuff| Buff</style>Strikes the current target twice, dealing a total of <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style>. Then Sun Tzu centers himself, causing an aura of calmness, reducing nearby enemies' ATK Speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration}</style>. All friendly units gain <style=basestat>{atk_speed_percentage_buff}</style> ATK Speed for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AbrahamLincoln_25_Name",
        "values": [
            "<style=ability_label>Invincibility| Buff</style>Provides Invincibility to all friendly units for <style=basestat>{duration}</style>, increases their DEF by <style=basestat>{def_percentage}</style> of Lincoln's DEF, and increases their Evasion by <style=basestat>{evasion_percentage}</style> for <style=basestat>{buff_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JaneAusten_5_Name",
        "values": [
            "<style=ability_label>Mind Control| Buff</style>Unleashes her literary genius, convincing an enemy unit to attack their allies for <style=basestat>{duration}</style>. While under Jane's control, the enemy unit's ATK is increased by <style=basestat>{atk_percentage}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MarcoPolo_1_Name",
        "values": [
            "<style=ability_label>Teleport| Stomp</style>Teleports into the largest cluster of enemy units, causing an explosion on arrival. The explosion deals <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Hercules_20_Name",
        "values": [
            "<style=ability_label>Stomp| Stun| Recovery</style>Slams the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and stunning them for <style=basestat>{duration}</style>. Also heals Hercules for <style=basestat>{heal_percentage}</style> of his Base Damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.LeonardoDaVinci_1_Name",
        "values": [
            "<style=ability_label>Teleport| Area Strike| Burn</style>Teleports to the largest cluster of enemy units and shoots fiery projectiles at enemies within a range of <style=basestat>{range}</style>, burning them for <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{duration}</style>, and gaining <style=basestat>{attack_buff}</style> attack and <style=basestat>{attack_speed_buff}</style> attack speed for the rest of the wave. Da Vinci then teleports back to his original position on the battlefield after 4 seconds."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.WilliamTell_10_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Buff</style>Aims his crossbow at the furthest target, shooting them for <style=basestat>{dmg_percentage}</style> damage and increasing his own ATK speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.LudwigVanBeethoven_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Stun</style>Directs a deafening sound towards the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage and stunning all enemies for <style=basestat>{stun_duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Spartacus_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff</style>Slashes the current target four times, dealing increased damage with each strike for a total of <style=basestat>{dmg_percentage}</style> damage. Also increases Spartacus' crit chance by <style=basestat>{crit_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MayanAstronomer_1_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Summon celestial energy to rain down upon a random enemy unit, dealing <style=basestat>{dmg_percentage}</style> damage. The impact also affects nearby enemy units within a range of <style=basestat>{range}</style> from the target."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Lagertha_1_Name",
        "values": [
            "<style=ability_label>Teleport | Melee Strike | Buff </style> Lagertha becomes lightning itself and strikes the most powerful enemy unit, dealing <style=basestat>{damage}</style> and gaining <style=basestat>{attack_speed_buff}</style> attack speed for <style=basestat>{attack_speed_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.EgyptianVizier_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Targets the biggest cluster of enemy units, reducing DEF by <style=basestat>{atk_percentage}</style> of Imhotep's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Cleopatra_5_Name",
        "values": [
            "<style=ability_label>Mind Control| Buff</style>Directs the Eye of Horus at the biggest cluster of enemy units, making them attack their allies for <style=basestat>{duration}</style>. Enemy units under Cleopatra's control gain <style=basestat>{attack_speed_percentage}</style> attack speed and <style=basestat>{attack_percentage}</style> of Cleopatra's ATK."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Plato_15_Name",
        "values": [
            "<style=ability_label>Debuff| Poison</style>Plato speaks in allegories, confusing enemy units and decreasing their accuracy by <style=basestat>{accuracy_percentage}</style> and ATK by <style=basestat>{atk_percentage}</style> of Plato's ATK for <style=basestat>{duration}</style>. Affected units take <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{dmg_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Jester_1_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Shoots his cannon at four random targets, dealing <style=basestat>{dmg_percentage}</style> to enemies in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.KingMinos_1_Name",
        "values": [
            "<style=ability_label>Taunt| Shield</style>Pounds his chest, taunting all enemies for <style=basestat>{taunt_duration}</style> and gaining <style=basestat>{shield_percentage}</style> of DEF as a shield."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RomanCenturion_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Shield</style>Stabs the current target from behind his shield, dealing <style=basestat>{dmg_percentage}</style> damage and gaining <style=basestat>{hp_percentage}</style> of his Base Damage as a shield."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.OracleOfDephi_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Targets the biggest cluster of enemy units, reducing DEF by <style=basestat>{atk_percentage}</style> of the Oracle's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JohnLocke_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Area Strike| Stun</style>Deals <style=basestat>{dmg_percentage}</style> damage to the current target and stuns it for <style=basestat>{stun_duration}</style>. Enemy units within a radius of <style=basestat>{range}</style> around the target receive <style=basestat>{dmg_percentage_around}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.TigerLily_1_Name",
        "values": [
            "<style=ability_label>Heal| Cleanse</style>Unleashes the power of nature, healing all friendly units by <style=basestat>{heal_percentage}</style> of Tiger Lily's base damage. Cleanses all negative effects."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.HermannTheCheruscan_15_Name",
        "values": [
            "<style=ability_label>Stomp| Recovery| Heal</style>Stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and healing Hermann by <style=basestat>{hp_percentage}</style> of his base damage. Also heals all friendly units within a range of <style=basestat>{range}</style> by <style=basestat>{hp_percentage_friendly}</style> of Hermann's Base Damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AttilaTheHun_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Recovery</style>Attila shoots a life-draining arrow at the furthest enemy target, dealing <style=basestat>{dmg_percentage}</style> damage and healing himself for <style=basestat>{heal_percentage}</style> of his base damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.TomoeGozen_10_Name",
        "values": [
            "<style=ability_label>Stomp| Bleed</style>Strikes the ground with her spear, unleashing a shockwave that deals <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style>. Affected units have a <style=basestat>{bleed_chance}</style> chance to bleed for an additional <style=basestat>{bleed_percentage}</style> damage over <style=basestat>{bleed_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SirLancelot_30_Name",
        "values": [
            "<style=ability_label>Melee Strike| Bleed| Buff</style>Swings his sword at his current target five times, dealing increased damage with each strike for a total of <style=basestat>{dmg_percentage}</style> damage. Each strike has a <style=basestat>{chance_percentage}</style> chance to let the opponent bleed for <style=basestat>{dmg_percentage_bleed}</style> over <style=basestat>{duration}</style>. Also increases Lancelot's critical damage by <style=basestat>{crit_dmg_percentage}</style> and his chance to critically hit by <style=basestat>{crit_chance_percentage}</style> for <style=basestat>{buff_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Achilles_10_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff| Recovery</style>Unleashes extraordinary strength by striking the current target for <style=basestat>{dmg_percentage}</style> damage. Achilles then gains a surge of swiftness, increasing his ATK speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{atk_speed_duration}</style>, and healing himself for <style=basestat>{heal_percentage}</style> of his maximum HP. "
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.HuaMulan_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Debuff| Burn</style>Summons a fiery dragon striken the location of the biggest cluster of enemy units three times, reducing DEF by <style=basestat>{def_percentage}</style> of Mulan's ATK each time and dealing a total of <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Affected enemy units burn for a further <style=basestat>{dmg_percentage_burn}</style> damage over <style=basestat>{burn_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AztecTlacateccatl_1_Name",
        "values": [
            "<style=ability_label>Heal</style>Invokes the Aztec spirits, healing Cuauhtémoc and all friendly units within a range of <style=basestat>{range}</style> by <style=basestat>{heal_percentage}</style> of Cuauhtémoc's Base Damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AdaLovelace_5_Name",
        "values": [
            "<style=ability_label>Area Strike| Burn</style>Detonates an explosion targetting the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Has a <style=basestat>{chance_percentage}</style> chance to burn affected enemies for <style=basestat>{dmg_percentage_burn}</style> damage over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.TomoeGozen_1_Name",
        "values": [
            "<style=ability_label>Stomp</style>Strikes the ground with her spear, unleashing a shockwave that deals <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Medusa_15_Name",
        "values": [
            "<style=ability_label>Area Strike| Stun| Poison</style>Fixes her gaze at the biggest cluster of enemy units, applying poison to all enemies in a range of <style=basestat>{range}</style>. The poison deals <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{duration}</style>, reduces ATK Speed by <style=basestat>{atk_speed_percentage}</style>, and leaves affected units stunned for <style=basestat>{stun_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AbrahamLincoln_1_Name",
        "values": [
            "<style=ability_label>Invincibility</style>Provides Invincibility to all friendly units for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AshokaTheGreat_1_Name",
        "values": [
            "<style=ability_label>Heal</style>Channels divine energy, healing the target with the most missing HP by <style=basestat>{heal_percentage}</style> of Ashoka's base damage. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.TribalHealer_1_Name",
        "values": [
            "<style=ability_label>Heal</style>Applies a herbal concoction to the friendly unit with the most missing HP, healing them by <style=basestat>{heal_percentage}</style> of Naya's base damage. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JoanOfArc_15_Name",
        "values": [
            "<style=ability_label>Area Strike| Heal| Buff</style>Calls for divine assistance targeting the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Also heals all friendly units in the same area by <style=basestat>{hp_percentage}</style> of Joan's base damage. Affected friendly units gain <style=basestat>{atk_percentage}</style> of Joan's ATK as ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.WilliamWallace_36_Name",
        "values": [
            "<style=ability_label>Stomp| Shield| Buff| Debuff</style>Performs a powerful sword attack, dealing <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style> and reduced their ATK Speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration_debuff}</style>. William Wallace gains <style=basestat>{shield_percentage}</style> of his Base Damage as a shield and increases his DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{duration}</style>. Also grants <style=basestat>{shield_percentage_friendly}</style> of his Base Damage as a shield to all friendly units within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.KingMinos_15_Name",
        "values": [
            "<style=ability_label>Taunt| Shield| Buff| Recovery</style>Pounds his chest, taunting all enemies for <style=basestat>{taunt_duration}</style>, gaining <style=basestat>{shield_percentage}</style> of DEF as a shield, and increasing DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{duration}</style>. Also heals Minos for <style=basestat>{hp_percentage}</style> of his Base Damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Confucius_15_Name",
        "values": [
            "<style=ability_label>Buff | Debuff</style>Confucius unleashes the wind's wisdom, reducing all enemy units' DEF by <style=basestat>{def_percentage}</style> of his ATK,  increasing all friendly units' ATK by <style=basestat>{atk_percentage}</style> of his ATK, and increasing their attack speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.RagnarLodbrok_1_Name",
        "values": [
            "<style=ability_label>Teleport | Taunt | Burn | Shield </style>Ragnar teleports towards the furthest enemy, taunting them and all units in a range of <style=basestat>{range}</style>, burning them for <style=basestat>{burn_dmg}</style> damage and shielding himself for <style=basestat>{shield_percentage}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.VikingJarl_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Unleashes a rallying shout, increasing the ATK of friendly units in a range of <style=basestat>{range}</style> around him by <style=basestat>{atk_percentage}</style> of his ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JuliusCaesar_1_Name",
        "values": [
            "<style=ability_label>Taunt| Invincibility| Burn</style>Invokes the power of Rome, taunting all enemies for <style=basestat>{taunt_duration}</style> and becoming invincible for <style=basestat>{invincibility_duration}</style>. Enemy units close to Caesar are affected by his fiery aura, burning them for <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{burn_duration}</style>. "
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MansaMusa_1_Name",
        "values": [
            "<style=ability_label>Buff</style>Mansa Musa targets the biggest cluster of friendly units, increasing their chance to critically hit by <style=basestat>{crit_percentage}</style> and their ATK by <style=basestat>{atk_percentage}</style> of Mansa Musa's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JapaneseShogun_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Debuff</style>Takes a swipe at the current target, dealing <style=basestat>{dmg_percentage}</style> damage to all enemy units in a range of <style=basestat>{range}</style> around it. Affected units have their accuracy reduced by  <style=basestat>{accuracy_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.WilliamWallace_1_Name",
        "values": [
            "<style=ability_label>Stomp| Shield| Buff</style>Performs a powerful sword attack, dealing <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style>. William Wallace gains <style=basestat>{shield_percentage}</style> of his Base Damage as a shield and increases his DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.QueenElizabethI_20_Name",
        "values": [
            "<style=ability_label>Buff| Shield</style>Inspires all friendly units, increasing their attack speed by <style=basestat>{atk_speed_percentage}</style>, their ATK by <style=basestat>{atk_percentage}</style> of Elizabeth's ATK, their critical damage by <style=basestat>{crit_dmg_percentage}</style>, and their chance to critically hit by <style=basestat>{crit_chance_percentage}</style> for <style=basestat>{duration}</style>. Also decreases all enemy units' shields by <style=basestat>{shield_percentage}</style> of Elizabeth's base damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.NapoleonBonaparte_40_Name",
        "values": [
            "<style=ability_label>Area Strike| Buff| Debuff</style>Commands a cannon shot at the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Affected units have their accuracy reduced by <style=basestat>{accuracy_percentage}</style>, their damage reduced by <style=basestat>{atk_percentage}</style>, and their movement speed reduced by <style=basestat>{movement_percentage}</style> for <style=basestat>{debuff_duration}</style>. All friendly units gain <style=basestat>{evasion_percentage}</style> evasion for <style=basestat>{evasion_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.NapoleonBonaparte_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Buff| Debuff</style>Commands a cannon shot at the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Affected units have their accuracy reduced by <style=basestat>{accuracy_percentage}</style> for <style=basestat>{debuff_duration}</style>. All friendly units gain <style=basestat>{evasion_percentage}</style> evasion for <style=basestat>{evasion_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MiyamotoMusashi_10_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff</style>Miyamoto strikes his current target four times for a total of <style=basestat>{dmg_percentage}</style> damage. Also increases his chance to critically hit by <style=basestat>{crit_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Geisha_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Poison</style>Throws a poisoned fan at the enemy with the highest HP, dealing <style=basestat>{dmg_percentage}</style> damage and poisoning them for <style=basestat>{poison_dmg_percentage}</style> damage over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Inanna_1_Name",
        "values": [
            "<style=ability_label>Melee Strike</style>Skillfully strikes the current target with her staff, dealing <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.KarlMarx_15_Name",
        "values": [
            "<style=ability_label>Debuff| Burn</style>Targets the biggest cluster of enemy units, reducing accuracy by <style=basestat>{accuracy_percentage}</style> and ATK by <style=basestat>{atk_percentage}</style> of Marx's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>. Affected units also burn for <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{burn_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.LudwigVanBeethoven_15_Name",
        "values": [
            "<style=ability_label>Area Strike| Stun| Burn</style>Directs a deafening sound towards the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage and stunning all enemies for <style=basestat>{stun_duration}</style> in a range of <style=basestat>{range}</style>. Affected units have a <style=basestat>{chance}</style> chance to burn, dealing a further <style=basestat>{burn_dmg_percentage}</style> damage over <style=basestat>{burn_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.ArtemisiaIOfCaria_1_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Lets arrows rain on the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Cleopatra_1_Name",
        "values": [
            "<style=ability_label>Mind Control| Buff</style>Directs the Eye of Horus at the biggest cluster of enemy units, making them attack their allies for <style=basestat>{duration}</style>. Enemy units under Cleopatra's control gain <style=basestat>{attack_speed_percentage}</style> attack speed."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Medusa_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Stun| Poison</style>Fixes her gaze at the biggest cluster of enemy units, applying poison to all enemies in a range of <style=basestat>{range}</style>. The poison deals <style=basestat>{dmg_percentage}</style> damage over <style=basestat>{duration}</style> and leaves affected units stunned for <style=basestat>{stun_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Cleopatra_20_Name",
        "values": [
            "<style=ability_label>Mind Control| Buff| Debuff</style>Directs the Eye of Horus at the biggest cluster of enemy units, making them attack their allies for <style=basestat>{duration}</style>. Enemy units under Cleopatra's control gain <style=basestat>{attack_speed_percentage}</style> attack speed and <style=basestat>{attack_percentage}</style> of Cleopatra's ATK. Their DEF is reduced by <style=basestat>{def_percentage}</style> of Cleopatra's ATK."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.LeifErikson_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Leif Erikson curses the closest enemy unit, negating any positive effects they have, reducing their defense by <style=basestat>{defense_debuff}</style> of his attack for <style=basestat>{defense_debuff_duration}</style> and commands all allies to attack them."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Achilles_30_Name",
        "values": [
            "<style=ability_label>Melee Strike| Buff|  Recovery</style>Unleashes extraordinary strength by striking the current target for <style=basestat>{dmg_percentage}</style> damage. Achilles then gains a surge of swiftness, increasing his ATK speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{atk_speed_duration}</style>, healing himself for <style=basestat>{heal_percentage}</style> of his maximum HP, and increasing his DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{def_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Inanna_10_Name",
        "values": [
            "<style=ability_label>Melee Strike| Stun</style>Skillfully strikes the current target with her staff, dealing <style=basestat>{dmg_percentage}</style> damage and having a <style=basestat>{chance}</style> chance to leave them stunned for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SirLancelot_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Bleed</style>Swings his sword at his current target five times, dealing increased damage with each strike for a total of <style=basestat>{dmg_percentage}</style> damage. Each strike has a <style=basestat>{chance_percentage}</style> chance to let the opponent bleed for <style=basestat>{dmg_percentage_bleed}</style> damage over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AmeliaEarhart_1_Name",
        "values": [
            "<style=ability_label>Teleport | Heal | Buff </style>Amelia rescues the most injured allied hero, transporting them to a safe location on the battlefield, healing them for <style=basestat>{heal_percent}</style> of Amelia's base damage. The unit then gains an adrenaline rush, improving their attack speed by <style=basestat>{attack_speed_buff}</style> and movement speed by <style=basestat>{move_speed_buff}</style> for <style=basestat>{buff_duration}</style>"
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AbrahamLincoln_10_Name",
        "values": [
            "<style=ability_label>Invincibility| Buff</style>Provides Invincibility to all friendly units for <style=basestat>{duration}</style> and increases their DEF by <style=basestat>{def_percentage}</style> of Lincoln's DEF for <style=basestat>{buff_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Leonidas_5_Name",
        "values": [
            "<style=ability_label>Stomp| Stun</style>Leonidas stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and stunning his current target for <style=basestat>{stun_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.CyrusTheGreat_15_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Causes an explosion on the current target, dealing <style=basestat>{dmg_percentage}</style> to all enemy units within a range of <style=basestat>{range}</style> and providing <style=basestat>{evasion_percentage}</style> Evasion for <style=basestat>{duration}</style> to all friendly units in the same range."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.GeorgeWashington_1_Name",
        "values": [
            "<style=ability_label>Stomp| Debuff| Soul Link</style>Stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and reducing their accuracy by <style=basestat>{accuracy_percentage}</style> for <style=basestat>{duration}</style>. Also links all friendly units' souls for <style=basestat>{duration_link}</style>. Soul-linked units share incoming damage between them."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Leonidas_1_Name",
        "values": [
            "<style=ability_label>Stomp</style>Leonidas stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.NapoleonBonaparte_15_Name",
        "values": [
            "<style=ability_label>Area Strike| Buff| Debuff</style>Napoleon commands a cannon shot at the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>. Affected units have their accuracy reduced by <style=basestat>{accuracy_percentage}</style> and their damage reduced by <style=basestat>{atk_percentage}</style> for <style=basestat>{debuff_duration}</style>. All friendly units gain <style=basestat>{evasion_percentage}</style> evasion for <style=basestat>{evasion_duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.SunTzu_1_Name",
        "values": [
            "<style=ability_label>Melee Strike| Debuff</style>Strikes the current target twice, dealing a total of <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style>. Then Sun Tzu centers himself, causing an aura of calmness, reducing nearby enemies' ATK Speed by <style=basestat>{atk_speed_percentage}</style> for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.MarieCurie_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Bleed| Poison</style>Throws <style=basestat>{no_vials}</style> vials with unstable chemicals at random enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style> and leaving affected units bleeding and poisoned for a further <style=basestat>{debuff_percentage}</style> damage over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.KarlMarx_1_Name",
        "values": [
            "<style=ability_label>Debuff</style>Targets the biggest cluster of enemy units, reducing accuracy by <style=basestat>{accuracy_percentage}</style> and ATK by <style=basestat>{atk_percentage}</style> of Marx's ATK for <style=basestat>{duration}</style> in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.VincentVanGogh_1_Name",
        "values": [
            "<style=ability_label>Summon</style>Creates a swirl of color at the location of the current target. For <style=basestat>{duration}</style>, the swirl will move across the battlefield in a spiral shape and deal up to <style=basestat>{dmg_percentage}</style> damage and reduce defense by <style=basestat>{defense_debuff}</style> to all enemy units it comes into contact with."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.JaguarWarrior_1_Name",
        "values": [
            "<style=ability_label>Stomp</style>Swings her sword in a circular motion, dealing <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Dracula_1_Name",
        "values": [
            "<style=ability_label> Ranged Strike | Heal | Bleed </style> Summons a swarm of bats that attacks up to 3 enemy units, inflicting bleed for <style=basestat>{bleed_damage}</style> over <style=basestat>{bleed_duration}</style>. Prioritizes heroes that are not bleeding. Dracula heals for <style=basestat>{heal_per_unit}</style> of his Base Damage for each bleeding unit on the battlefield."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Menes_1_Name",
        "values": [
            "<style=ability_label>Area Strike| Debuff| Burn</style>Calls forth a storm at the location of the biggest cluster of enemy units. The storm deals <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>, reduces movement speed by <style=basestat>{move_speed_percentage}</style>, and leaves affected units burning for <style=basestat>{dmg_percentage_burn}</style> over <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.AdaLovelace_1_Name",
        "values": [
            "<style=ability_label>Area Strike</style>Detonates an explosion targetting the biggest cluster of enemy units, dealing <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Menes_10_Name",
        "values": [
            "<style=ability_label>Area Strike| Debuff| Burn| Buff</style>Calls forth a divine storm at the location of the biggest cluster of enemy units. The storm deals <style=basestat>{dmg_percentage}</style> damage in a range of <style=basestat>{range}</style>, reduces movement speed by <style=basestat>{move_speed_percentage}</style>, and leaves affected units burning for <style=basestat>{dmg_percentage_burn}</style> over <style=basestat>{duration}</style>. Also targets the biggest cluster of friendly units, increasing ATK by <style=basestat>{atk_percentage}</style> of Menes' ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.QinShiHuang_1_Name",
        "values": [
            "<style=ability_label>Stormcast</style>Qin Shi Huang summons his Spirit Sword that flies across the battlefield, damaging enemy units for <style=basestat>{dmg_percentage}</style> damage, and healing allied units for <style=basestat>{heal_percentage}</style> of Qin Shi Huang's base damage for  <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.WilliamWallace_10_Name",
        "values": [
            "<style=ability_label>Stomp| Shield| Buff</style>Performs a powerful sword attack, dealing <style=basestat>{dmg_percentage}</style> damage to all enemy units within a range of <style=basestat>{range}</style>. William Wallace gains <style=basestat>{shield_percentage}</style> of his Base Damage as a shield and increases his DEF by <style=basestat>{def_percentage}</style> for <style=basestat>{duration}</style>. Also grants <style=basestat>{shield_percentage_friendly}</style> of his Base Damage as a shield to all friendly units within a range of <style=basestat>{range}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.HermannTheCheruscan_1_Name",
        "values": [
            "<style=ability_label>Stomp| Recovery</style>Stomps the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and recovering <style=basestat>{hp_percentage}</style> of his base damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.LouisXIV_1_Name",
        "values": [
            "<style=ability_label>Buff| Shield</style>Targets the biggest cluster of friendly units, increasing DEF by <style=basestat>{def_percentage}</style> of Louis' DEF in a range of <style=basestat>{range}</style> for <style=basestat>{duration}</style>. Affected units also gain <style=basestat>{shield_percentage}</style> of Louis' base damage as a shield."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Confucius_1_Name",
        "values": [
            "<style=ability_label>Buff | Debuff</style>Confucius unleashes the wind's wisdom, reducing all enemy units' DEF by <style=basestat>{def_percentage}</style> of his ATK and increasing all friendly units' ATK by <style=basestat>{atk_percentage}</style> of his ATK for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Hercules_1_Name",
        "values": [
            "<style=ability_label>Stomp| Stun</style>Slams the ground, dealing <style=basestat>{dmg_percentage}</style> damage to all enemies within a range of <style=basestat>{range}</style> and stunning them for <style=basestat>{duration}</style>."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.QueenBoudicca_1_Name",
        "values": [
            "<style=ability_label>Ranged Strike| Stun</style>Throws her spear at the furthest target, hitting them for <style=basestat>{dmg_percentage}</style> damage and leaving them stunned for <style=basestat>{duration}</style>. Prioritizes heroes."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.VanHelsing_1_Name",
        "values": [
            "<style=ability_label> Stormcast | Bleed </style>Shoots 3 arrows at the closest enemy units, damaging each of them for <style=basestat>{damage}</style> and bleeding them for <style=basestat>{bleed_damage}</style> for <style=basestat>{bleed_duration}</style>. "
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.Shaolin_1_Name",
        "values": [
            "<style=ability_label>Melee Strike</style>Kicks the current target three times for a total of <style=basestat>{dmg_percentage}</style> damage."
        ]
    },
    {
        "key": "Base.AbilityDescriptions.hero_battle_ability_description.OttoVonBismarck_1_Name",
        "values": [
            "<style=ability_label>Taunt| Shield</style>Taunts all enemies for <style=basestat>{taunt_duration}</style>. Bismarck gains <style=basestat>{shield_percentage}</style> of his base damage as a shield."
        ]
    }
]

export default abilityDescriptions;
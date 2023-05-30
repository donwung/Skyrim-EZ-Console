from bs4 import BeautifulSoup
import re

html_doc = """
<table class="wikitable sortable jquery-tablesorter">
<thead><tr>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Perk</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Rank</th>
<th class="unsortable">Description</th>
<th class="unsortable"><a href="/wiki/Skyrim:Form_ID" title="Skyrim:Form ID">ID</a></th>
<th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Skill Req.</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Perk Req.</th>
</tr></thead><tbody>
<tr>
<td><i><span id="Novice_Conjuration"></span>Novice Conjuration</i></td>
<td></td>
<td>Cast Novice level Conjuration spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0f2ca7</span></span></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td><i><span id="Apprentice_Conjuration"></span>Apprentice Conjuration</i></td>
<td></td>
<td>Cast Apprentice level Conjuration spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44bb</span></span></span></td>
<td>25 Conjuration</td>
<td>Novice Conjuration</td>
</tr>
<tr>
<td><i><span id="Adept_Conjuration"></span>Adept Conjuration</i></td>
<td></td>
<td>Cast Adept level Conjuration spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44bc</span></span></span></td>
<td>50 Conjuration</td>
<td>Apprentice Conjuration</td>
</tr>
<tr>
<td><i><span id="Expert_Conjuration"></span>Expert Conjuration</i></td>
<td></td>
<td>Cast Expert level Conjuration spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44bd</span></span></span></td>
<td>75 Conjuration</td>
<td>Adept Conjuration</td>
</tr>
<tr>
<td><i><span id="Master_Conjuration"></span>Master Conjuration</i></td>
<td></td>
<td>Cast Master level Conjuration spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44be</span></span></span></td>
<td>100 Conjuration</td>
<td>Expert Conjuration</td>
</tr>
<tr>
<td><i><span id="Conjuration_Dual_Casting"></span>Conjuration Dual Casting</i></td>
<td></td>
<td><a href="/wiki/Skyrim:Magic_Overview#Dual-Casting" title="Skyrim:Magic Overview">Dual casting</a> a Conjuration spell overcharges the spell, allowing it to last longer.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0153ce</span></span></span></td>
<td>20 Conjuration</td>
<td>Novice Conjuration</td>
</tr>
<tr>
<td><i><span id="Mystic_Binding"></span>Mystic Binding</i></td>
<td></td>
<td>Bound weapons do more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0640b3</span></span></span></td>
<td>20 Conjuration</td>
<td>Novice Conjuration</td>
</tr>
<tr>
<td><i><span id="Soul_Stealer"></span>Soul Stealer</i></td>
<td></td>
<td>Bound weapons cast Soul Trap on targets.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0d799e</span></span></span></td>
<td>30 Conjuration</td>
<td>Mystic Binding</td>
</tr>
<tr>
<td><i><span id="Oblivion_Binding"></span>Oblivion Binding</i></td>
<td></td>
<td>Bound weapons will banish summoned creatures and turn raised ones.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0d799c</span></span></span></td>
<td>50 Conjuration</td>
<td>Soul Stealer</td>
</tr>
<tr>
<td><i><span id="Necromancy"></span>Necromancy</i></td>
<td></td>
<td>Greater duration for reanimated undead.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0581dd</span></span></span></td>
<td>40 Conjuration</td>
<td>Novice Conjuration</td>
</tr>
<tr>
<td><i><span id="Dark_Souls"></span>Dark Souls</i></td>
<td></td>
<td>Reanimated undead have 100 points more health.<sup id="cite_ref-Zombie_1-0" class="reference"><a href="#cite_note-Zombie-1">[1]</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">0581de</span></span></span></td>
<td>70 Conjuration</td>
<td>Necromancy</td>
</tr>
<tr>
<td rowspan="2"><i><span id="Summoner"></span>Summoner</i></td>
<td>1</td>
<td>Can summon atronachs or raise undead twice as far away.<sup id="cite_ref-Dremora_2-0" class="reference"><a href="#cite_note-Dremora-2">[2]</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f30</span></span></span></td>
<td>30 Conjuration</td>
<td>Novice Conjuration</td>
</tr>
<tr>
<td>2</td>
<td>Can summon atronachs or raise undead three times as far away.<sup id="cite_ref-Dremora_2-1" class="reference"><a href="#cite_note-Dremora-2">[2]</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f31</span></span></span></td>
<td>70 Conjuration</td>
<td></td>
</tr>
<tr>
<td><i><span id="Atromancy"></span>Atromancy</i></td>
<td></td>
<td>Double duration for conjured Atronachs.<sup id="cite_ref-Dremora_2-2" class="reference"><a href="#cite_note-Dremora-2">[2]</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">0cb419</span></span></span></td>
<td>40 Conjuration</td>
<td>Summoner</td>
</tr>
<tr>
<td><i><span id="Elemental_Potency"></span>Elemental Potency</i></td>
<td></td>
<td>Conjured Atronachs are 50% more powerful.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0cb41a</span></span></span></td>
<td>80 Conjuration</td>
<td>Atromancy</td>
</tr>
<tr>
<td><i><span id="Twin_Souls"></span>Twin Souls</i></td>
<td></td>
<td>You can have two atronachs or reanimated zombies.<sup id="cite_ref-Dremora_2-3" class="reference"><a href="#cite_note-Dremora-2">[2]</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">0d5f1c</span></span></span></td>
<td>100 Conjuration</td>
<td>Dark Souls <i>or</i> Elemental Potency</td>
</tr>
</tbody><tfoot></tfoot></table>
"""

# "SKILLNAME": {
#   "rank": {
#       "1": {
#           "description": "DESCRIPTION RANK 1",
#           "ID": "SKILL ID"
#       }
#       "2": {
#           "description": "DESCRIPTION RANK 2",
#           "ID": "SKILL ID"
#       }
#   }
# },


soup = BeautifulSoup(html_doc, 'html.parser')

# print(soup.tbody.find_all('tr'))

rowDataArr = []
memo = []

for tableRow in soup.tbody.find_all('tr'):
    # print(tableRow.get_text() + "!!")
    for tableData in tableRow:
        if (tableData.get_text() != "\n" and tableData.get_text() != ""):
            if not (re.search("[0-9][0-9]\s", tableData.get_text())):
                if (tableData.get_text() not in memo):
                    if (re.search("[.]", tableData.get_text())):
                        print('"' + "description" + '":' +
                              '"' + tableData.get_text() + '"')
                    else:
                        if (not tableData.get_text().isnumeric()):
                            if (len(tableData.get_text() + "") == 8):
                                print('"' + "ID" + '":' + '"' +
                                      tableData.get_text() + '"')
                            else:
                                print('"' + tableData.get_text() + '"')
                            memo.append(tableData.get_text())
                        else:
                            print('"' + tableData.get_text() + '":')

    # rowDataArr.append(tableRow)

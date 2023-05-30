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
<td><i><span id="Novice_Destruction"></span>Novice Destruction</i></td>
<td></td>
<td>Cast Novice level Destruction spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0f2ca8</span></span></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td><i><span id="Apprentice_Destruction"></span>Apprentice Destruction</i></td>
<td></td>
<td>Cast Apprentice level Destruction spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44bf</span></span></span></td>
<td>25 Destruction</td>
<td>Novice Destruction</td>
</tr>
<tr>
<td><i><span id="Adept_Destruction"></span>Adept Destruction</i></td>
<td></td>
<td>Cast Adept level Destruction spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44c0</span></span></span></td>
<td>50 Destruction</td>
<td>Apprentice Destruction</td>
</tr>
<tr>
<td><i><span id="Expert_Destruction"></span>Expert Destruction</i></td>
<td></td>
<td>Cast Expert level Destruction spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44c1</span></span></span></td>
<td>75 Destruction</td>
<td>Adept Destruction</td>
</tr>
<tr>
<td><i><span id="Master_Destruction"></span>Master Destruction</i></td>
<td></td>
<td>Cast Master level Destruction spells for half magicka.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c44c2</span></span></span></td>
<td>100 Destruction</td>
<td>Expert Destruction</td>
</tr>
<tr>
<td><i><span id="Rune_Master"></span>Rune Master</i></td>
<td></td>
<td>Can place runes five times farther away.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f32</span></span></span></td>
<td>40 Destruction</td>
<td>Apprentice Destruction</td>
</tr>
<tr>
<td rowspan="2"><i><span id="Augmented_Flames"></span>Augmented Flames</i></td>
<td>1</td>
<td>Fire spells do 25% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0581e7</span></span></span></td>
<td>30 Destruction</td>
<td>Novice Destruction</td>
</tr>
<tr>
<td>2</td>
<td>Fire spells do 50% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">10fcf8</span></span></span></td>
<td>60 Destruction</td>
<td>Augmented Flames Level 1</td>
</tr>
<tr>
<td><i><span id="Intense_Flames"></span>Intense Flames</i></td>
<td></td>
<td>Fire damage causes targets to flee if their health is low (under 20%).</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0f392e</span></span></span></td>
<td>50 Destruction</td>
<td>Augmented Flames</td>
</tr>
<tr>
<td rowspan="2"><i><span id="Augmented_Frost"></span>Augmented Frost</i></td>
<td>1</td>
<td>Frost spells do 25% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0581ea</span></span></span></td>
<td>30 Destruction</td>
<td>Novice Destruction</td>
</tr>
<tr>
<td>2</td>
<td>Frost spells do 50% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">10fcf9</span></span></span></td>
<td>60 Destruction</td>
<td>Augmented Frost Level 1</td>
</tr>
<tr>
<td><i><span id="Deep_Freeze"></span>Deep Freeze</i></td>
<td></td>
<td>Frost damage paralyzes targets if their health is low (under 20%).<sup class="reference plainlinks nourlexpansion" id="note_stability"><a href="#intnote_stability">†</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">0f3933</span></span></span></td>
<td>60 Destruction</td>
<td>Augmented Frost</td>
</tr>
<tr>
<td rowspan="2"><i><span id="Augmented_Shock"></span>Augmented Shock</i></td>
<td>1</td>
<td>Shock spells do 25% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">058200</span></span></span></td>
<td>30 Destruction</td>
<td>Novice Destruction</td>
</tr>
<tr>
<td>2</td>
<td>Shock spells do 50% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">10fcfa</span></span></span></td>
<td>60 Destruction</td>
<td>Augmented Shock Level 1</td>
</tr>
<tr>
<td><i><span id="Disintegrate"></span>Disintegrate</i></td>
<td></td>
<td>Shock spells disintegrate targets if their health is low (under 15%).</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0f3f0e</span></span></span></td>
<td>70 Destruction</td>
<td>Augmented Shock</td>
</tr>
<tr>
<td><i><span id="Destruction_Dual_Casting"></span>Destruction Dual Casting</i></td>
<td></td>
<td><a href="/wiki/Skyrim:Magic_Overview#Dual-Casting" title="Skyrim:Magic Overview">Dual casting</a> a Destruction spell overcharges the effects into an even more powerful version.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0153cf</span></span></span></td>
<td>20 Destruction</td>
<td>Novice Destruction</td>
</tr>
<tr>
<td><i><span id="Impact"></span>Impact</i></td>
<td></td>
<td>Most destruction spells will stagger an opponent when dual cast.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0153d2</span></span></span></td>
<td>40 Destruction</td>
<td>Destruction Dual Casting</td>
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
                        print('"' + "description" + '":' + '"' + tableData.get_text() + '",')
                    else:
                        if (not tableData.get_text().isnumeric()):
                            if(len(tableData.get_text() + "") == 8):
                                print('"' + "ID" + '":' +'"' + tableData.get_text() + '"},')
                            else:
                                print('"' + tableData.get_text() + '":{')
                            memo.append(tableData.get_text())
                        else:
                            print('"' + tableData.get_text() + '":{')

    # rowDataArr.append(tableRow)

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
<td rowspan="5"><i><span id="Barbarian"></span>Barbarian</i></td>
<td>1</td>
<td>Two-Handed weapons do 20% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0babe8</span></span></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Two-Handed weapons do 40% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">079346</span></span></span></td>
<td>20 Two-handed</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Two-Handed weapons do 60% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">079347</span></span></span></td>
<td>40 Two-handed</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Two-Handed weapons do 80% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">079348</span></span></span></td>
<td>60 Two-handed</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Two-Handed weapons do twice as much damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">079349</span></span></span></td>
<td>80 Two-handed</td>
<td></td>
</tr>
<tr>
<td><i><span id="Champion.27s_Stance"></span>Champion's Stance</i></td>
<td></td>
<td><a href="/wiki/Skyrim:Power_Attack" class="mw-redirect" title="Skyrim:Power Attack">Power attacks</a> with two-handed weapons cost 25% less stamina.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">052d51</span></span></span></td>
<td>20 Two-handed</td>
<td>Barbarian</td>
</tr>
<tr>
<td><i><span id="Devastating_Blow"></span>Devastating Blow</i></td>
<td></td>
<td>Standing power attacks do 25% bonus damage with a chance to decapitate your enemies.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">052d52</span></span></span></td>
<td>50 Two-handed</td>
<td>Champion's Stance</td>
</tr>
<tr>
<td><i><span id="Great_Critical_Charge"></span>Great Critical Charge</i></td>
<td></td>
<td>Can do a two-handed power attack while sprinting that does double critical damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0cb407</span></span></span></td>
<td>50 Two-handed</td>
<td>Champion's Stance</td>
</tr>
<tr>
<td><i><span id="Sweep"></span>Sweep</i></td>
<td></td>
<td>Sideways power attacks with two-handed weapons hit all targets in front of you.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">03af9e</span></span></span></td>
<td>70 Two-handed</td>
<td>Great Critical Charge <i>or</i> Devastating Blow</td>
</tr>
<tr>
<td><i><span id="Warmaster"></span>Warmaster</i></td>
<td></td>
<td>Backwards power attack has a 25% chance to paralyze the target.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">03afa7</span></span></span></td>
<td>100 Two-handed</td>
<td>Sweep</td>
</tr>
<tr>
<td rowspan="3"><i><span id="Deep_Wounds"></span>Deep Wounds</i></td>
<td>1</td>
<td>Attacks with <a href="/wiki/Skyrim:Greatsword" class="mw-redirect" title="Skyrim:Greatsword">greatswords</a> have a 10% chance of doing <a href="/wiki/Skyrim:Damage#Critical_Strikes" title="Skyrim:Damage">critical damage</a>.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">03af83</span></span></span></td>
<td>30 Two-handed</td>
<td>Barbarian</td>
</tr>
<tr>
<td>2</td>
<td>Attacks with greatswords have a 15% chance of doing more critical damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c1e94</span></span></span></td>
<td>60 Two-handed</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Attacks with greatswords have a 20% chance of doing even more critical damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c1e95</span></span></span></td>
<td>90 Two-handed</td>
<td></td>
</tr>
<tr>
<td rowspan="3"><i><span id="Limbsplitter"></span>Limbsplitter</i></td>
<td>1</td>
<td>Attacks with <a href="/wiki/Skyrim:Battle_Axe" class="mw-redirect" title="Skyrim:Battle Axe">battle axes</a> cause extra <a href="/wiki/Skyrim:Bleeding_Damage" title="Skyrim:Bleeding Damage">bleeding damage</a>.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c5c05</span></span></span></td>
<td>30 Two-handed</td>
<td>Barbarian</td>
</tr>
<tr>
<td>2</td>
<td>Attacks with battle axes cause more bleeding damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c5c06</span></span></span></td>
<td>60 Two-handed</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Attacks with battle axes cause even more bleeding damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c5c07</span></span></span></td>
<td>90 Two-handed</td>
<td></td>
</tr>
<tr>
<td rowspan="3"><i><span id="Skullcrusher"></span>Skullcrusher</i></td>
<td>1</td>
<td>Attacks with <a href="/wiki/Skyrim:Warhammer" class="mw-redirect" title="Skyrim:Warhammer">warhammers</a> ignore 25% of armor.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">03af84</span></span></span></td>
<td>30 Two-handed</td>
<td>Barbarian</td>
</tr>
<tr>
<td>2</td>
<td>Attacks with warhammers ignore 50% of armor.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c1e96</span></span></span></td>
<td>60 Two-handed</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Attacks with warhammers ignore 75% of armor.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0c1e97</span></span></span></td>
<td>90 Two-handed</td>
<td></td>
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

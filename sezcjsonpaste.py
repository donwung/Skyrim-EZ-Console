from bs4 import BeautifulSoup

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
<td rowspan="5"><i><span id="Overdraw"></span>Overdraw</i></td>
<td>1</td>
<td>Bows do 20% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">0babed</span></span></span></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>Bows do 40% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">07934a</span></span></span></td>
<td>20 Archery</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Bows do 60% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">07934b</span></span></span></td>
<td>40 Archery</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Bows do 80% more damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">07934d</span></span></span></td>
<td>60 Archery</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Bows do twice as much damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">079354</span></span></span></td>
<td>80 Archery</td>
<td></td>
</tr>
<tr>
<td rowspan="3"><i><span id="Critical_Shot"></span>Critical Shot</i></td>
<td>1</td>
<td>10% chance of a critical hit that does extra damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f1c</span></span></span></td>
<td>30 Archery</td>
<td>Overdraw</td>
</tr>
<tr>
<td>2</td>
<td>15% chance of a critical hit that does 25% more critical damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f1e</span></span></span></td>
<td>60 Archery</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>20% chance of a critical hit that does 50% more critical damage.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f1f</span></span></span></td>
<td>90 Archery</td>
<td></td>
</tr>
<tr>
<td><i><span id="Hunter.27s_Discipline"></span>Hunter's Discipline</i></td>
<td></td>
<td>Recover twice as many arrows from dead bodies.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">051b12</span></span></span></td>
<td>50 Archery</td>
<td>Critical Shot</td>
</tr>
<tr>
<td><i><span id="Ranger"></span>Ranger</i></td>
<td></td>
<td>Able to move faster with a drawn bow.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">058f63</span></span></span></td>
<td>60 Archery</td>
<td>Hunter's Discipline</td>
</tr>
<tr>
<td><i><span id="Eagle_Eye"></span>Eagle Eye</i></td>
<td></td>
<td>Pressing Block while aiming will zoom in your view.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">058f61</span></span></span></td>
<td>30 Archery</td>
<td>Overdraw</td>
</tr>
<tr>
<td><i><span id="Power_Shot"></span>Power Shot</i></td>
<td></td>
<td>Arrows stagger all but the largest opponents 50% of the time.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">058f62</span></span></span></td>
<td>50 Archery</td>
<td>Eagle Eye</td>
</tr>
<tr>
<td><i><span id="Quick_Shot"></span>Quick Shot</i></td>
<td></td>
<td>Can draw a bow 30% faster.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">105f19</span></span></span></td>
<td>70 Archery</td>
<td>Power Shot</td>
</tr>
<tr>
<td rowspan="2"><i><span id="Steady_Hand"></span>Steady Hand</i></td>
<td>1</td>
<td>Zooming in with a bow slows time by 25%.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">103ada</span></span></span></td>
<td>40 Archery</td>
<td>Eagle Eye</td>
</tr>
<tr>
<td>2</td>
<td>Zooming in with a bow slows time by 50%.</td>
<td><span class="idall"><span class="idref">00<span class="idcase">103adb</span></span></span></td>
<td>60 Archery</td>
<td></td>
</tr>
<tr>
<td><i><span id="Bullseye"></span>Bullseye</i></td>
<td></td>
<td>15% chance of paralyzing the target for a few seconds.<sup class="reference plainlinks nourlexpansion" id="note_1"><a href="#intnote_1">†</a></sup></td>
<td><span class="idall"><span class="idref">00<span class="idcase">058f64</span></span></span></td>
<td>100 Archery</td>
<td>Ranger <i>or</i> Quick Shot</td>
</tr>
</tbody><tfoot></tfoot></table>
"""

soup = BeautifulSoup(html_doc, 'html.parser')

# print(soup.tbody.find_all('tr'))

# for tableData in soup.tbody.find_all('tr'):
#     print(soup.get_text())

print(soup.tbody.get_text())
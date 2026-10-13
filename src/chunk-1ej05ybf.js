import { MZ, QOs, gf, ypt, a6 } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
const I = new Map([
    [
        "a",
        "aAＡａ𝐀𝐚𝐴𝑎𝑨𝒂𝒜𝒶𝓐𝓪𝔄𝔞𝔸𝕒𝕬𝖆𝖠𝖺𝗔𝗮𝘈𝘢𝘼𝙖𝙰𝚊ⒶⓐаαᴀɑꭺꓮⲁАΑⱭᎪⲀÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧḀḁẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặÅ𝐀𝐚𝐴𝑎𝑨𝒂𝒜𝒶𝓐𝓪𝔄𝔞𝔸𝕒𝕬𝖆𝖠𝖺𝗔𝗮𝘈𝘢𝘼𝙖𝙰𝚊𝚨𝛂𝛢𝛼𝜜𝜶𝝖𝝰𝞐𝞪ᴬᵃᵅₐ"
    ],
    [
        "b",
        "bBＢｂ𝐁𝐛𝐵𝑏𝑩𝒃𝒝𝒷𝓑𝓫𝔅𝔟𝔹𝕓𝕭𝖇𝖡𝖻𝗕𝗯𝘉𝘣𝘽𝙗𝙱𝚋ⒷⓑℬВΒʙꮟᏼꓐⲃᏏᏴⲂḂḃḄḅḆḇ𝐁𝐛𝐵𝑏𝑩𝒃𝒷𝓑𝓫𝔅𝔟𝔹𝕓𝕭𝖇𝖡𝖻𝗕𝗯𝘉𝘣𝘽𝙗𝙱𝚋𝚩𝛣𝜝𝝗𝞑ᴮᵇ"
    ],
    [
        "c",
        "cCＣｃ𝐂𝐜𝐶𝑐𝑪𝒄𝒞𝒸𝓒𝓬𝔆𝔠𝔺𝕔𝕮𝖈𝖢𝖼𝗖𝗰𝘊𝘤𝘾𝙘𝙲𝚌ⒸⓒℂℭсᴄꮯꓚϲⲥСᏟϹⲤÇçĆćĈĉĊċČčḈḉ𝐂𝐜𝐶𝑐𝑪𝒄𝒞𝒸𝓒𝓬𝔠𝕔𝕮𝖈𝖢𝖼𝗖𝗰𝘊𝘤𝘾𝙘𝙲𝚌ᶜⅭⅽꟲ"
    ],
    [
        "d",
        "dDＤｄ𝐃𝐝𝐷𝑑𝑫𝒅𝒟𝒹𝓓𝓭𝔇𝔡𝔻𝕕𝕯𝖉𝖣𝖽𝗗𝗱𝘋𝘥𝘿𝙙𝙳𝚍ⒹⓓⅅⅆԁᴅꭰꮷꓓԀᎠᏧĎďḊḋḌḍḎḏḐḑḒḓ𝐃𝐝𝐷𝑑𝑫𝒅𝒟𝒹𝓓𝓭𝔇𝔡𝔻𝕕𝕯𝖉𝖣𝖽𝗗𝗱𝘋𝘥𝘿𝙙𝙳𝚍ᴰᵈⅮⅾ"
    ],
    [
        "e",
        "eEＥｅ𝐄𝐞𝐸𝑒𝑬𝒆𝒠𝒺𝓔𝓮𝔈𝔢𝔼𝕖𝕰𝖊𝖤𝖾𝗘𝗲𝘌𝘦𝙀𝙚𝙴𝚎ⒺⓔℯℰⅇеεᴇꭼꓰⲉЕΕᎬⲈÈÉÊËèéêëĒēĔĕĖėĘęĚěȄȅȆȇȨȩḔḕḖḗḘḙḚḛḜḝẸẹẺẻẼẽẾếỀềỂểỄễỆệ𝐄𝐞𝐸𝑒𝑬𝒆𝓔𝓮𝔈𝔢𝔼𝕖𝕰𝖊𝖤𝖾𝗘𝗲𝘌𝘦𝙀𝙚𝙴𝚎𝚬𝛆𝛜𝛦𝜀𝜖𝜠𝜺𝝐𝝚𝝴𝞊𝞔𝞮𝟄ᴱᵉₑ"
    ],
    [
        "f",
        "fFＦｆ𝐅𝐟𝐹𝑓𝑭𝒇𝒡𝒻𝓕𝓯𝔉𝔣𝔽𝕗𝕱𝖋𝖥𝖿𝗙𝗳𝘍𝘧𝙁𝙛𝙵𝚏ⒻⓕℱꜰꓝḞḟ𝐅𝐟𝐹𝑓𝑭𝒇𝒻𝓕𝓯𝔉𝔣𝔽𝕗𝕱𝖋𝖥𝖿𝗙𝗳𝘍𝘧𝙁𝙛𝙵𝚏ᶠꟳ"
    ],
    [
        "g",
        "gGＧｇ𝐆𝐠𝐺𝑔𝑮𝒈𝒢𝒼𝓖𝓰𝔊𝔤𝔾𝕘𝕲𝖌𝖦𝗀𝗚𝗴𝘎𝘨𝙂𝙜𝙶𝚐ⒼⓖℊɢɡꮐꓖցꞬᏀՑĜĝĞğĠġĢģǦǧǴǵḠḡ𝐆𝐠𝐺𝑔𝑮𝒈𝒢𝓖𝓰𝔊𝔤𝔾𝕘𝕲𝖌𝖦𝗀𝗚𝗴𝘎𝘨𝙂𝙜𝙶𝚐ᴳᵍᶢ"
    ],
    [
        "h",
        "hHＨｈ𝐇𝐡𝐻𝑕𝑯𝒉𝒣𝒽𝓗𝓱𝔋𝔥𝔿𝕙𝕳𝖍𝖧𝗁𝗛𝗵𝘏𝘩𝙃𝙝𝙷𝚑ⒽⓗℋℌℍℎһНΗʜꮋꮒꓧհⲏҺᎻᏂՀⲎĤĥȞȟḢḣḤḥḦḧḨḩḪḫẖ𝐇𝐡𝐻𝑯𝒉𝒽𝓗𝓱𝔥𝕙𝕳𝖍𝖧𝗁𝗛𝗵𝘏𝘩𝙃𝙝𝙷𝚑𝚮𝛨𝜢𝝜𝞖ʰᴴₕ"
    ],
    [
        "i",
        "iIＩｉ𝐈𝐢𝐼𝑖𝑰𝒊𝒤𝒾𝓘𝓲𝔌𝔦𝕀𝕚𝕴𝖎𝖨𝗂𝗜𝗶𝘐𝘪𝙄𝙞𝙸𝚒ⒾⓘℐℑℹⅈіιɪıꓲɩⲓІΙꞮƖⲒÌÍÎÏìíîïĨĩĪīĬĭĮįİǏǐȈȉȊȋḬḭḮḯỈỉỊị𝐈𝐢𝐼𝑖𝑰𝒊𝒾𝓘𝓲𝔦𝕀𝕚𝕴𝖎𝖨𝗂𝗜𝗶𝘐𝘪𝙄𝙞𝙸𝚒𝚤𝚰𝛊𝛪𝜄𝜤𝜾𝝞𝝸𝞘𝞲ᴵᵢᶥᶦⁱⅠⅰ"
    ],
    [
        "j",
        "jJＪｊ𝐉𝐣𝐽𝑗𝑱𝒋𝒥𝒿𝓙𝓳𝔍𝔧𝕁𝕛𝕵𝖏𝖩𝗃𝗝𝗷𝘑𝘫𝙅𝙟𝙹𝚓ⒿⓙⅉјϳᴊꭻꓙЈͿᎫĴĵǰ𝐉𝐣𝐽𝑗𝑱𝒋𝒥𝒿𝓙𝓳𝔍𝔧𝕁𝕛𝕵𝖏𝖩𝗃𝗝𝗷𝘑𝘫𝙅𝙟𝙹𝚓ʲᴶ"
    ],
    [
        "k",
        "kKＫｋ𝐊𝐤𝐾𝑘𝑲𝒌𝒦𝓀𝓚𝓴𝔎𝔨𝕂𝕜𝕶𝖐𝖪𝗄𝗞𝗸𝘒𝘬𝙆𝙠𝙺𝚔ⓀⓚKкκᴋꮶꓗⲕКΚᏦⲔĶķǨǩḰḱḲḳḴḵ𝐊𝐤𝐾𝑘𝑲𝒌𝒦𝓀𝓚𝓴𝔎𝔨𝕂𝕜𝕶𝖐𝖪𝗄𝗞𝗸𝘒𝘬𝙆𝙠𝙺𝚔𝚱𝛋𝛞𝛫𝜅𝜘𝜥𝜿𝝒𝝟𝝹𝞌𝞙𝞳𝟆ᴷᵏₖ"
    ],
    [
        "l",
        "lLＬｌ𝐋𝐥𝐿𝑙𝑳𝒍𝒧𝓁𝓛𝓵𝔏𝔩𝕃𝕝𝕷𝖑𝖫𝗅𝗟𝗹𝘓𝘭𝙇𝙡𝙻𝚕ⓁⓛℒℓӏʟꮮꓡӀᏞĹĺĻļĽľḶḷḸḹḺḻḼḽ𝐋𝐥𝐿𝑙𝑳𝒍𝓁𝓛𝓵𝔏𝔩𝕃𝕝𝕷𝖑𝖫𝗅𝗟𝗹𝘓𝘭𝙇𝙡𝙻𝚕ˡᴸᶫₗⅬⅼ"
    ],
    [
        "m",
        "mMＭｍ𝐌𝐦𝑀𝑚𝑴𝒎𝒨𝓂𝓜𝓶𝔐𝔪𝕄𝕞𝕸𝖒𝖬𝗆𝗠𝗺𝘔𝘮𝙈𝙢𝙼𝚖ⓂⓜℳМΜᴍмꮇꓟⲙᎷⲘḾḿṀṁṂṃ𝐌𝐦𝑀𝑚𝑴𝒎𝓂𝓜𝓶𝔐𝔪𝕄𝕞𝕸𝖒𝖬𝗆𝗠𝗺𝘔𝘮𝙈𝙢𝙼𝚖𝚳𝛭𝜧𝝡𝞛ᴹᵐₘⅯⅿ"
    ],
    [
        "n",
        "nNＮｎ𝐍𝐧𝑁𝑛𝑵𝒏𝒩𝓃𝓝𝓷𝔑𝔫𝕅𝕟𝕹𝖓𝖭𝗇𝗡𝗻𝘕𝘯𝙉𝙣𝙽𝚗ⓃⓝℕΝɴꓠոⲛՈⲚÑñŃńŅņŇňǸǹṄṅṆṇṈṉṊṋ𝐍𝐧𝑁𝑛𝑵𝒏𝒩𝓃𝓝𝓷𝔑𝔫𝕟𝕹𝖓𝖭𝗇𝗡𝗻𝘕𝘯𝙉𝙣𝙽𝚗𝚴𝛮𝜨𝝢𝞜ᴺᶰⁿₙ"
    ],
    [
        "o",
        "oOＯｏ𝐎𝐨𝑂𝑜𝑶𝒐𝒪𝓄𝓞𝓸𝔒𝔬𝕆𝕠𝕺𝖔𝖮𝗈𝗢𝗼𝘖𝘰𝙊𝙤𝙾𝚘ⓄⓞℴоοᴏꓳօⲟОΟՕⲞÒÓÔÕÖòóôõöŌōŎŏŐőƠơǑǒǪǫǬǭȌȍȎȏȪȫȬȭȮȯȰȱṌṍṎṏṐṑṒṓỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợ𝐎𝐨𝑂𝑜𝑶𝒐𝒪𝓞𝓸𝔒𝔬𝕆𝕠𝕺𝖔𝖮𝗈𝗢𝗼𝘖𝘰𝙊𝙤𝙾𝚘𝚶𝛐𝛰𝜊𝜪𝝄𝝤𝝾𝞞𝞸ᴼᵒₒ"
    ],
    [
        "p",
        "pPＰｐ𝐏𝐩𝑃𝑝𝑷𝒑𝒫𝓅𝓟𝓹𝔓𝔭𝕇𝕡𝕻𝖕𝖯𝗉𝗣𝗽𝘗𝘱𝙋𝙥𝙿𝚙ⓅⓟℙрρᴘꮲꓑⲣРΡᏢⲢṔṕṖṗ𝐏𝐩𝑃𝑝𝑷𝒑𝒫𝓅𝓟𝓹𝔓𝔭𝕡𝕻𝖕𝖯𝗉𝗣𝗽𝘗𝘱𝙋𝙥𝙿𝚙𝚸𝛒𝛠𝛲𝜌𝜚𝜬𝝆𝝔𝝦𝞀𝞎𝞠𝞺𝟈ᴾᵖᵨₚ"
    ],
    [
        "q",
        "qQＱｑ𝐐𝐪𝑄𝑞𝑸𝒒𝒬𝓆𝓠𝓺𝔔𝔮𝕈𝕢𝕼𝖖𝖰𝗊𝗤𝗾𝘘𝘲𝙌𝙦𝚀𝚚ⓆⓠℚԛզԚԶ𝐐𝐪𝑄𝑞𝑸𝒒𝒬𝓆𝓠𝓺𝔔𝔮𝕢𝕼𝖖𝖰𝗊𝗤𝗾𝘘𝘲𝙌𝙦𝚀𝚚ꟴ"
    ],
    [
        "r",
        "rRＲｒ𝐑𝐫𝑅𝑟𝑹𝒓𝒭𝓇𝓡𝓻𝔕𝔯𝕉𝕣𝕽𝖗𝖱𝗋𝗥𝗿𝘙𝘳𝙍𝙧𝚁𝚛ⓇⓡℛℜℝʀꭱꮢꓣƦᎡᏒŔŕŖŗŘřȐȑȒȓṘṙṚṛṜṝṞṟ𝐑𝐫𝑅𝑟𝑹𝒓𝓇𝓡𝓻𝔯𝕣𝕽𝖗𝖱𝗋𝗥𝗿𝘙𝘳𝙍𝙧𝚁𝚛ʳᴿᵣ"
    ],
    [
        "s",
        "sSＳｓ𝐒𝐬𝑆𝑠𝑺𝒔𝒮𝓈𝓢𝓼𝔖𝔰𝕊𝕤𝕾𝖘𝖲𝗌𝗦𝘀𝘚𝘴𝙎𝙨𝚂𝚜ⓈⓢѕꜱꮪꓢЅᏚŚśŜŝŞşŠšſȘșṠṡṢṣṤṥṦṧṨṩẛ𝐒𝐬𝑆𝑠𝑺𝒔𝒮𝓈𝓢𝓼𝔖𝔰𝕊𝕤𝕾𝖘𝖲𝗌𝗦𝘀𝘚𝘴𝙎𝙨𝚂𝚜ˢₛ꟱"
    ],
    [
        "t",
        "tTＴｔ𝐓𝐭𝑇𝑡𝑻𝒕𝒯𝓉𝓣𝓽𝔗𝔱𝕋𝕥𝕿𝖙𝖳𝗍𝗧𝘁𝘛𝘵𝙏𝙩𝚃𝚝ⓉⓣТτᴛтꭲꓔⲧΤᎢⲦŢţŤťȚțṪṫṬṭṮṯṰṱẗ𝐓𝐭𝑇𝑡𝑻𝒕𝒯𝓉𝓣𝓽𝔗𝔱𝕋𝕥𝕿𝖙𝖳𝗍𝗧𝘁𝘛𝘵𝙏𝙩𝚃𝚝𝚻𝛕𝛵𝜏𝜯𝝉𝝩𝞃𝞣𝞽ᵀᵗₜ"
    ],
    [
        "u",
        "uUＵｕ𝐔𝐮𝑈𝑢𝑼𝒖𝒰𝓊𝓤𝓾𝔘𝔲𝕌𝕦𝖀𝖚𝖴𝗎𝗨𝘂𝘜𝘶𝙐𝙪𝚄𝚞ⓊⓤυᴜꮜꓴսᏌՍÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưǓǔǕǖǗǘǙǚǛǜȔȕȖȗṲṳṴṵṶṷṸṹṺṻỤụỦủỨứỪừỬửỮữỰự𝐔𝐮𝑈𝑢𝑼𝒖𝒰𝓊𝓤𝓾𝔘𝔲𝕌𝕦𝖀𝖚𝖴𝗎𝗨𝘂𝘜𝘶𝙐𝙪𝚄𝚞𝛖𝜐𝝊𝞄𝞾ᵁᵘᵤᶸ"
    ],
    [
        "v",
        "vVＶｖ𝐕𝐯𝑉𝑣𝑽𝒗𝒱𝓋𝓥𝓿𝔙𝔳𝕍𝕧𝖁𝖛𝖵𝗏𝗩𝘃𝘝𝘷𝙑𝙫𝚅𝚟ⓋⓥνᴠѵꮩꓦѴᏙṼṽṾṿ𝐕𝐯𝑉𝑣𝑽𝒗𝒱𝓋𝓥𝓿𝔙𝔳𝕍𝕧𝖁𝖛𝖵𝗏𝗩𝘃𝘝𝘷𝙑𝙫𝚅𝚟𝛎𝜈𝝂𝝼𝞶ᵛᵥⅤⅴ"
    ],
    [
        "w",
        "wWＷｗ𝐖𝐰𝑊𝑤𝑾𝒘𝒲𝓌𝓦𝔀𝔚𝔴𝕎𝕨𝖂𝖜𝖶𝗐𝗪𝘄𝘞𝘸𝙒𝙬𝚆𝚠ⓌⓦԝᴡꮃꮤꓪԜᎳᏔŴŵẀẁẂẃẄẅẆẇẈẉẘ𝐖𝐰𝑊𝑤𝑾𝒘𝒲𝓌𝓦𝔀𝔚𝔴𝕎𝕨𝖂𝖜𝖶𝗐𝗪𝘄𝘞𝘸𝙒𝙬𝚆𝚠ʷᵂ"
    ],
    [
        "x",
        "xXＸｘ𝐗𝐱𝑋𝑥𝑿𝒙𝒳𝓍𝓧𝔁𝔛𝔵𝕏𝕩𝖃𝖝𝖷𝗑𝗫𝘅𝘟𝘹𝙓𝙭𝚇𝚡ⓍⓧхχꓫⲭХΧⲬẊẋẌẍ𝐗𝐱𝑋𝑥𝑿𝒙𝒳𝓍𝓧𝔁𝔛𝔵𝕏𝕩𝖃𝖝𝖷𝗑𝗫𝘅𝘟𝘹𝙓𝙭𝚇𝚡𝚾𝛘𝛸𝜒𝜲𝝌𝝬𝞆𝞦𝟀ˣᵡᵪₓⅩⅹ"
    ],
    [
        "y",
        "yYＹｙ𝐘𝐲𝑌𝑦𝒀𝒚𝒴𝓎𝓨𝔂𝔜𝔶𝕐𝕪𝖄𝖞𝖸𝗒𝗬𝘆𝘠𝘺𝙔𝙮𝚈𝚢ⓎⓨуΥʏꭹꓬⲩУᎩⲨÝýÿŶŷŸȲȳẎẏẙỲỳỴỵỶỷỸỹ𝐘𝐲𝑌𝑦𝒀𝒚𝒴𝓎𝓨𝔂𝔜𝔶𝕐𝕪𝖄𝖞𝖸𝗒𝗬𝘆𝘠𝘺𝙔𝙮𝚈𝚢𝚼𝛶𝜰𝝪𝞤ʸ"
    ],
    [
        "z",
        "zZＺｚ𝐙𝐳𝑍𝑧𝒁𝒛𝒵𝓏𝓩𝔃𝔝𝔷𝕑𝕫𝖅𝖟𝖹𝗓𝗭𝘇𝘡𝘻𝙕𝙯𝚉𝚣ⓏⓩℤℨΖᴢꮓꓜⲍᏃⲌŹźŻżŽžẐẑẒẓẔẕ𝐙𝐳𝑍𝑧𝒁𝒛𝒵𝓏𝓩𝔃𝔷𝕫𝖅𝖟𝖹𝗓𝗭𝘇𝘡𝘻𝙕𝙯𝚉𝚣𝚭𝛧𝜡𝝛𝞕ᶻ"
    ]
]);
function Bt(u) {
    return u.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function xue(u, e) {
    let d = Bt(u);
    if (d.length <= e) {
        return d;
    }
    return Bt(gtn(u, e));
}
function gtn(u, e) {
    let a = Math.max(0, Math.floor(u.length * (e / Bt(u).length)));
    while(true){
        let n = ne(u, a);
        if (Bt(n).length + 13 <= e || a === 0) {
            return `${n}… [truncated]`;
        }
        a = Math.floor(a * 0.9);
    }
}
function Os(u) {
    return Bt(u).replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}
const iTr = "\\u00ad\\u034f\\u0600-\\u0605\\u061c\\u06dd\\u070f\\u0890\\u0891\\u08e2\\u115f\\u1160\\u17b4\\u17b5\\u180b-\\u180f\\u200b-\\u200f\\u202a-\\u202e\\u2060-\\u206f\\u3164\\ufe00-\\ufe0f\\ufeff\\uffa0\\ufff0-\\ufffb\\u{110bd}\\u{110cd}\\u{13430}-\\u{1343f}\\u{1bca0}-\\u{1bca3}\\u{1d173}-\\u{1d17a}\\u{16fe4}\\u{e0000}-\\u{e0fff}";
const C = {
    "＜": "<",
    "＞": ">",
    "﹤": "<",
    "﹥": ">",
    "〈": "<",
    "〉": ">",
    "⟨": "<",
    "⟩": ">",
    "〈": "<",
    "〉": ">",
    "‹": "<",
    "›": ">",
    "˂": "<",
    "˃": ">",
    ᐸ: "<",
    ᐳ: ">",
    "❬": "<",
    "❭": ">",
    "❮": "<",
    "❯": ">",
    "❰": "<",
    "❱": ">",
    "⧼": "<",
    "⧽": ">",
    "≮": "<",
    "≯": ">",
    "≺": "<",
    "≻": ">",
    "⋖": "<",
    "⋗": ">",
    "／": "/",
    "∕": "/",
    "⁄": "/"
};
const uu = "\\u0300-\\u0344\\u0346-\\u036f\\u0483-\\u0489\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u064b-\\u065f\\u0670\\u06d6-\\u06dc\\u06df-\\u06e4\\u06e7\\u06e8\\u06ea-\\u06ed\\u1ab0-\\u1aff\\u1dc0-\\u1dff\\u20d0-\\u20ff\\u3099\\u309a\\ufe20-\\ufe2f";
const R3e = `${iTr}${uu}\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f-\\x9f\\u2028\\u2029`;
const du = "\\x0b\\x0c\\x1c-\\x1f\\x85\\u2028\\u2029\\u115f\\u1160\\u3164\\uffa0";
const AMt = "A-Za-z0-9_\\-";
const U = `(?:[^${AMt}]|$)`;
const CMt = "\\p{Pd}\\u2212\\u207b\\u208b\\u02d7\\u2796\\u2043\\u30fc\\uff70";
const jFe = ":\\uff1a\\ufe55\\ufe13\\ua789\\u2236\\u02d0\\u02f8\\u05c3\\u0589\\u0703\\u0704\\u16ec\\u1803\\u1809\\u205a\\ua4fd\\ufe30";
const F = "=\\u207c\\u208c\\ufe66\\uff1d\\ua78a\\u2550\\u268c\\ua4ff\\u{1f7f0}";
const B = "⹀゠᐀";
const G = `\\s\\u2800${R3e}`;
const aTr = `_\\p{Pc}\\u2017\\u02cd\\u07fa\\u0640${CMt}`;
const H = `[${aTr}]`;
const b = (()=>{
    let u = {
        "<": "<",
        ">": ">",
        "/": "/"
    };
    for (let [e, d] of Object.entries(C)){
        u[d] += e;
    }
    return {
        open: u["<"],
        close: u[">"],
        slash: u["/"],
        filler: `^${AMt}${u["<"]}${u[">"]}`,
        lookalikePattern: new RegExp(`[${Object.keys(C).join("")}]`, "g"),
        invisiblePattern: new RegExp(`[${iTr}]`, "gu")
    };
})();
const Ez = {
    open: b.open,
    close: b.close,
    slash: b.slash
};
function Sdt() {
    return b.invisiblePattern;
}
function dwo(u) {
    return ypt(u).replace(Sdt(), a6);
}
function WFe(u, e) {
    return `(?=([${u}]*))(?:\\${e})`;
}
function RMt(u) {
    return WFe(R3e, u);
}
const x = new Map;
const eu = 64;
function w(u, closeOnly) {
    let d = `${closeOnly ? "/" : ""}${u}`;
    let a = x.get(d);
    if (a) {
        return a;
    }
    let n = K({
        tags: [
            u
        ],
        closeOnly,
        fillerClass: b.filler,
        spell: (c)=>{
            if (c === "-" || c === "_") {
                return H;
            }
            return c;
        },
        tail: undefined
    });
    if (x.size >= eu) {
        x.clear();
    }
    x.set(d, n);
    return n;
}
function K({ tags, closeOnly, fillerClass, spell, tail }) {
    let { open, slash } = b;
    let t = 0;
    let o = closeOnly ? `${WFe(`${fillerClass}${slash}`, ++t)}[${slash}]${WFe(fillerClass, ++t)}` : WFe(fillerClass, ++t);
    let r = tags.map((i)=>[
            ...i
        ].map((p, R)=>(R === 0 ? "" : RMt(++t)) + spell(p)).join(""));
    let s = tail === undefined ? U : `${RMt(++t)}${tail}`;
    return new RegExp(`[${open}](?!\\\\)(?=${o}(?:${r.join("|")})${s})`, "giu");
}
function x3e(u, e) {
    return e.replace(w(u, true), "<\\");
}
function htn(u, e) {
    return e.replace(w(u, false), "<\\");
}
function yO(u) {
    return u.replace(b.lookalikePattern, (e)=>C[e] ?? e);
}
const au = (()=>{
    let u = new Uint8Array(65536);
    for (let e of Object.keys(C)){
        for(let d = 0; d < e.length; d++){
            u[e.charCodeAt(d)] = 1;
        }
    }
    return u;
})();
function jCs(u) {
    let e = 0;
    for(let d = 0; d < u.length; d++){
        e += au[u.charCodeAt(d)];
    }
    return e;
}
const M = {
    а: "a",
    е: "e",
    о: "o",
    р: "p",
    с: "c",
    у: "y",
    х: "x",
    к: "k",
    і: "i",
    ј: "j",
    ѕ: "s",
    ԁ: "d",
    ԛ: "q",
    ԝ: "w",
    һ: "h",
    ӏ: "l",
    В: "b",
    М: "m",
    Н: "h",
    Т: "t",
    α: "a",
    ε: "e",
    ι: "i",
    κ: "k",
    ν: "v",
    ο: "o",
    ρ: "p",
    τ: "t",
    υ: "u",
    χ: "x",
    ϳ: "j",
    Β: "b",
    Ζ: "z",
    Η: "h",
    Μ: "m",
    Ν: "n",
    Υ: "y",
    ᴀ: "a",
    ʙ: "b",
    ᴄ: "c",
    ᴅ: "d",
    ᴇ: "e",
    ꜰ: "f",
    ɢ: "g",
    ʜ: "h",
    ɪ: "i",
    ᴊ: "j",
    ᴋ: "k",
    ʟ: "l",
    ᴍ: "m",
    ɴ: "n",
    ᴏ: "o",
    ᴘ: "p",
    ʀ: "r",
    ꜱ: "s",
    ᴛ: "t",
    ᴜ: "u",
    ᴠ: "v",
    ᴡ: "w",
    ʏ: "y",
    ᴢ: "z",
    ɑ: "a",
    ɡ: "g",
    ı: "i",
    ѵ: "v",
    т: "t",
    м: "m",
    ꭰ: "d",
    ꭱ: "r",
    ꭲ: "t",
    ꭹ: "y",
    ꭺ: "a",
    ꭻ: "j",
    ꭼ: "e",
    ꮃ: "w",
    ꮇ: "m",
    ꮋ: "h",
    ꮐ: "g",
    ꮒ: "h",
    ꮓ: "z",
    ꮜ: "u",
    ꮟ: "b",
    ꮢ: "r",
    ꮤ: "w",
    ꮩ: "v",
    ꮪ: "s",
    ꮮ: "l",
    ꮯ: "c",
    ꮲ: "p",
    ꮶ: "k",
    ꮷ: "d",
    ᏼ: "b",
    ꓐ: "b",
    ꓑ: "p",
    ꓓ: "d",
    ꓔ: "t",
    ꓖ: "g",
    ꓗ: "k",
    ꓙ: "j",
    ꓚ: "c",
    ꓜ: "z",
    ꓝ: "f",
    ꓟ: "m",
    ꓠ: "n",
    ꓡ: "l",
    ꓢ: "s",
    ꓣ: "r",
    ꓦ: "v",
    ꓧ: "h",
    ꓪ: "w",
    ꓫ: "x",
    ꓬ: "y",
    ꓮ: "a",
    ꓰ: "e",
    ꓲ: "i",
    ꓳ: "o",
    ꓴ: "u",
    զ: "q",
    հ: "h",
    ո: "n",
    ս: "u",
    ց: "g",
    օ: "o",
    ϲ: "c",
    ⲥ: "c",
    ɩ: "i",
    ⲁ: "a",
    ⲃ: "b",
    ⲉ: "e",
    ⲏ: "h",
    ⲓ: "i",
    ⲕ: "k",
    ⲙ: "m",
    ⲛ: "n",
    ⲟ: "o",
    ⲣ: "p",
    ⲧ: "t",
    ⲩ: "y",
    ⲭ: "x",
    ⲍ: "z"
};
const fu = (()=>{
    let table = {
        ...M
    };
    for (let [e, d] of Object.entries(M)){
        let a = e.toUpperCase();
        if (a !== e && [
            ...a
        ].length === 1 && !(a in table) && !/^[A-Za-z]$/.test(a)) {
            table[a] = d;
        }
    }
    return {
        table,
        pattern: new RegExp(`[${Object.keys(table).join("")}]`, "gu")
    };
})();
function z7(u) {
    let { table, pattern } = fu;
    let a = (n)=>n.replace(pattern, (c)=>table[c] ?? c);
    return a(MZ(nu(a(u))));
}
function nu(u) {
    return QOs(u).replace(/\p{M}+/gu, "");
}
const lTr = "abcdefghijklmnopqrstuvwxyz";
function b1(u) {
    if (!/^[a-z]$/.test(u)) {
        throw Error("latinLetterConfusableClass: expected one ASCII lowercase letter");
    }
    return I.get(u) ?? u;
}
function _O(tags, e) {
    let d = b;
    return K({
        tags,
        closeOnly: false,
        fillerClass: `${d.filler}${[
            ...lTr
        ].map(b1).join("")}`,
        spell: (a)=>{
            if (/^[a-z]$/.test(a)) {
                return `[${b1(a)}]`;
            }
            if (a === "-" || a === "_") {
                return H;
            }
            if (/^[0-9]$/.test(a)) {
                return a;
            }
            throw Error("confusableTagScrubPattern: tag names are lowercase [a-z0-9_-]");
        },
        tail: e?.({
            name: AMt,
            close: d.close,
            colon: jFe
        })
    });
}
function mxe(u) {
    return `${u}\\`;
}
function Yjn() {
    return _O([
        "channel"
    ], uwo);
}
function uwo({ name, close, span = (n)=>`[^${close}]{0,${n}}`, assign = (n)=>`${n}(?=(?<assignGap>[${G}]*))\\k<assignGap>[${F}${B}]` }) {
    return `(?:(?![${name}])|(?<=[${du}][${R3e}]*))${span(120)}(?<![\\w-])${assign("source")}`;
}
const pwo = "antml";
function Xjn() {
    return _O([
        pwo
    ], ({ colon })=>`[${colon}]`);
}
const cu = /[\u0080-\u{10ffff}]/u;
const tu = new RegExp(`[${b.open}]`, "u");
const ru = new RegExp(`[${CMt}]`, "gu");
const ou = new RegExp(`^[${aTr}]$`, "u");
const su = String.fromCharCode(65533);
const y = 57344;
const bu = y + 32;
const iu = y + 126;
const P = 57856;
const v = P + 32;
const X = P + 126;
const O = `${String.fromCharCode(v)}-${String.fromCharCode(X)}`;
const q = [
    "nv",
    "uy"
];
const S = 57600;
const lu = S + 255;
const k = String.fromCharCode(S + 240);
const T = new Map;
const gu = 32768;
const Y = new Uint8Array(4352);
let m;
function E(u) {
    return String.fromCharCode(y + u.charCodeAt(0));
}
function L(u) {
    return String.fromCharCode(P + u.charCodeAt(0));
}
function pu(u) {
    let e = T.get(u);
    if (e !== undefined) {
        return e;
    }
    let d = W(u);
    if (T.size >= gu) {
        T.clear();
    }
    T.set(u, d);
    return d;
}
function W(u) {
    let e = u.codePointAt(0);
    let d = u;
    if (e >= bu && e <= iu || e >= v && e <= X || e >= S && e <= lu) {
        d = su;
    } else if (B.includes(u)) {
        d = k;
    } else {
        if (m === undefined) {
            m = new Map;
            for (let [f, t] of I){
                for (let o of t){
                    m.set(o, f);
                }
            }
        }
        let a = new Set;
        for (let f of [
            u,
            u.toLowerCase(),
            u.toUpperCase(),
            u.toUpperCase().toLowerCase(),
            u.toLowerCase().toUpperCase()
        ]){
            let t = m.get(f);
            if (t !== undefined) {
                a.add(t);
            }
        }
        let n = [
            ...a
        ].sort().join("");
        let c = n || z7(u).replace(ru, "-").toLowerCase().replace(/\u00DF/g, "ss");
        if (a.size > 1) {
            let f = q.indexOf(n);
            d = f === -1 ? E(n) : String.fromCharCode(S + f);
        } else if (/^[a-z0-9_-]+$/.test(c)) {
            d = [
                ...c
            ].map((f, t)=>{
                if (t === 0) {
                    return E(f);
                }
                return L(f);
            }).join("");
        } else if (ou.test(u)) {
            d = E("_");
        }
    }
    return d;
}
const Eu = 256;
function Au(u) {
    let e = 1;
    for(let d = Math.max(u << 8, 128); d < u + 1 << 8; d++){
        let a = String.fromCodePoint(d);
        if (W(a) !== a) {
            e = 2;
            break;
        }
    }
    Y[u] = e;
    return e;
}
function _u(u) {
    if (/^[a-z0-9]$/.test(u)) {
        let e = q.flatMap((d, a)=>{
            if (d.includes(u)) {
                return [
                    String.fromCharCode(S + a)
                ];
            }
            return [];
        });
        return `[${u}${E(u)}${L(u)}${e.join("")}]`;
    }
    if (u === "-" || u === "_") {
        return `[_\\-${E("_")}${E("-")}${L("_")}${L("-")}${k}]`;
    }
    throw Error("createTagFormScrub: tag names are lowercase [a-z0-9_-]");
}
function Su({ tags, tail }) {
    let { open, close, filler } = b;
    let c = 0;
    let spell = (r)=>[
            ...r
        ].map((s, i)=>(i === 0 ? "" : RMt(++c)) + _u(s)).join("");
    let t = tags.map(spell);
    let o = tail === undefined ? U : `${RMt(++c)}${tail({
        name: AMt,
        close,
        colon: jFe,
        span: (r)=>`[${O}]*(?:[^${close}${O}][${O}]*){0,${r}}`,
        spell,
        assign: (r)=>`${spell(r)}${WFe(G, ++c)}[${F}${k}]`
    })}`;
    return new RegExp(`[${open}](?!\\\\)(?=[${filler}]*?(?:${t.join("|")})${o})`, "giu");
}
function ytn(u) {
    let e = u.filter((d)=>d.tags.length > 0).map(Su);
    return {
        openerOffsets (d) {
            return j(d, e);
        },
        neutralize (d) {
            let a = "";
            let n = 0;
            for (let c of j(d, e)){
                a += `${d.slice(n, c)}<\\`;
                n = c + 1;
            }
            return a + d.slice(n);
        }
    };
}
function xu(u) {
    let e = [];
    let d = [];
    let a;
    let reading = "";
    let c = 0;
    for(let f = 0; f < u.length; f++){
        let t = u.charCodeAt(f);
        if (t < 128) {
            continue;
        }
        let o = u.charCodeAt(f + 1);
        let r = t >= 55296 && t <= 56319 && o >= 56320 && o <= 57343 ? 2 : 1;
        let s = (r === 2 ? u.codePointAt(f) : t) >> 8;
        let i = Y[s];
        if (i === 0) {
            a ??= new Uint16Array(4352);
            if (++a[s] >= Eu) {
                i = Au(s);
            }
        }
        if (i === 1) {
            f += r - 1;
            continue;
        }
        let p = pu(u.slice(f, f + r));
        reading += u.slice(c, f) + p;
        c = f + r;
        if (p.length !== r) {
            e.push(reading.length);
            d.push(p.length - r + (d.at(-1) ?? 0));
        }
        f += r - 1;
    }
    reading += u.slice(c);
    return {
        reading,
        offsetInText (f) {
            let t = 0;
            let e_length = e.length;
            while(t < e_length){
                let r = t + e_length >> 1;
                if (e[r] <= f) {
                    t = r + 1;
                } else {
                    e_length = r;
                }
            }
            if (t === 0) {
                return f;
            }
            return f - d[t - 1];
        }
    };
}
function j(u, e) {
    if (!tu.test(u)) {
        return [];
    }
    let d = cu.test(u) ? xu(u) : undefined;
    let a = d?.reading ?? u;
    let n = new Set;
    for (let c of e){
        for (let f of a.matchAll(c)){
            n.add(d ? d.offsetInText(f.index) : f.index);
        }
    }
    return [
        ...n
    ].sort((c, f)=>c - f);
}
const P3e = "\\[\\uff3b\\ufe47\\u27e6\\u301a\\u2045\\u298b\\u298d\\u298f\\u3010\\u3014\\ufe5d\\u3016\\u3018\\u2772\\u27ec\\ufe17\\ufe39\\ufe3b";
const z = "\\]\\uff3d\\ufe48\\u27e7\\u301b\\u2046\\u298c\\u2990\\u298e\\u3011\\u3015\\ufe5e\\u3017\\u3019\\u2773\\u27ed\\ufe18\\ufe3a\\ufe3c";
const wdt = `\\t\\v\\f \\u00a0\\u1680\\u2000-\\u200a\\u202f\\u205f\\u3000\\u2800${R3e}`;
const h = `\\r\\n${wdt}`;
const J = `\\p{Pc}\\u2017.\\u00b7\\u0387\\u2022\\u2219\\u22c5\\u2024\\u2026\\u2027\\u30fb\\ufe52\\uff65\\uff0e/\\u2044\\u2215\\uff0f\\\\\\u2216\\ufe68\\uff3c|\\u00a6\\uff5c~\\u223c\\uff5e${jFe};\\u037e\\ufe54\\uff1b`;
const Q = `${CMt}${J}`;
const Tu = "\\u30fc\\uff70\\u115f\\u1160\\u3164\\uffa0";
const Z = 4;
function $u(u) {
    let e = `[${h}]*`;
    let d = "";
    for(let a = 0; a < Z; a++){
        d = `(?:[${Q}]${e}${d})?`;
    }
    return `(?=(${e}${d}))(?:\\${u})`;
}
const mu = `[^${P3e}${z}\\r\\n]{0,119}?(?:(?![${Tu}])[\\p{L}\\p{N}]|(?![${z}])["')\\u2019\\u201d\\uff09\\p{Pe}\\p{Pf}])`;
const cTr = Symbol("LEAD_HEX_ID");
const Pue = Symbol("LEAD_SPAN");
const _tn = Symbol("LEAD_OPEN_END");
function WCs(u) {
    let e = 0;
    let d = ()=>$u(++e);
    let a = ()=>WFe(`\\r\\n${R3e}`, ++e);
    let n = ()=>`(?=[${h}${Q}])` + d();
    let c = ()=>`(?=[${J}]{0,${Z}}[${h}${CMt}])` + d();
    let f = `0-9\\uff10-\\uff19\\u{1d7ce}-\\u{1d7ff}\\u2070\\u00b9\\u00b2\\u00b3\\u2074-\\u2079\\u2080-\\u2089${[
        ..."abcdef"
    ].map(b1).join("")}`;
    let t = (g)=>{
        if (!/^[a-z]+$/.test(g)) {
            throw Error("bracketedLeadScrubPattern: words are lowercase ASCII");
        }
        return [
            ...g
        ].map((A, l)=>(l === 0 ? "" : a()) + `[${b1(A)}]`).join("");
    };
    let o = (length)=>Array.from({
            length
        }, (A, l)=>(l === 0 ? "" : a()) + `[${f}]`).join("") + a() + `[${CMt}]`;
    let r = ()=>o(8) + d() + o(4) + d() + o(4);
    let s = "(?![0-9A-Za-z_])";
    let i = ()=>{
        throw Error("bracketedLeadScrubPattern: LEAD_OPEN_END must be the last token in a lead");
    };
    let p = d();
    let R = u.map((g)=>{
        let A = g.at(-1) === _tn;
        let l = A ? g.slice(0, -1) : g;
        if (l.length === 0) {
            throw Error("bracketedLeadScrubPattern: a lead has at least one token");
        }
        let D = l.map((_, N)=>(N === 0 ? "" : typeof _ !== "string" ? d() : l[N - 1] === Pue ? c() : n()) + (_ === cTr ? r() : _ === Pue ? mu : _ === _tn ? i() : t(_) + (l[N + 1] === Pue ? s : ""))).join("");
        if (A || l.at(-1) === cTr) {
            return D;
        }
        return `${D}${s}`;
    });
    return new RegExp(`[${P3e}](?!\\\\)(?=${p}(?:${R.join("|")}))`, "giu");
}
function S1(u, e) {
    let d = htn(u, yO(gf(e).replace(Sdt(), "")));
    if (z7(d) === d) {
        return d;
    }
    let a = w(u, false);
    return d.split("<").map((n, c)=>{
        if (c === 0 || n.startsWith("\\")) {
            return n;
        }
        let f = z7(n);
        if (f !== n && `< ${f}`.search(a) === 0) {
            return `\\${n}`;
        }
        return n;
    }).join("<");
}
const Lu = /&(?:amp|lt|gt);/g;
const V = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
};
function b_(u) {
    return u.replace(Lu, (e)=>V[e] ?? e);
}
const Cu = /&(?:amp|lt|gt|quot|apos);/g;
const Ru = {
    ...V,
    "&quot;": '"',
    "&apos;": "'"
};
function Iue(u) {
    return u.replace(Cu, (e)=>Ru[e] ?? e);
}
export { Bt, xue, gtn, Os, iTr, R3e, AMt, CMt, jFe, aTr, Ez, Sdt, dwo, WFe, RMt, x3e, htn, yO, jCs, z7, lTr, b1, _O, mxe, Yjn, uwo, pwo, Xjn, ytn, P3e, wdt, cTr, Pue, _tn, WCs, S1, b_, Iue };

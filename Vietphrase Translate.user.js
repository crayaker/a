// ==UserScript==
// @name         Vietphrase Translate
// @namespace    VP
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// @require      https://raw.githubusercontent.com/duxonem/Vietphrase-userscript/main/PhienAm.txt.js
// @require      https://raw.githubusercontent.com/duxonem/Vietphrase-userscript/main/Names.txt
// @require      https://raw.githubusercontent.com/duxonem/Vietphrase-userscript/main/VietPhrase.txt.js
// ==/UserScript==

// Option
let Options = {
    Ngoac:false,
    VPmotnghia:true,
    Daucachnghia:';',
    Xoadichlieutru:true };

function htmlEntities(str) { return String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'","&#39;");}String.prototype.count=function(search) {return this.split(search).length-1;}
function isLetter(str) { return str.length == 1 && str.match(/[0-9a-z]/i); }
function isChineseLetter(str) {return str.length==1 && str.match(/[\u4E00-\u9FA5]/)}

let translateCount=0;

function translateByOrder(text,safe=true) {
            let result = [], tmpArr={};

              const Names = {
"乌特拉夫斯基": "Utravsky",
"克蕾奥帕特拉": "Cleopatra",
"卢米安. 李": "Lumian.Lee",
"弗兰克. 李": "Frankie.Lee",
"阿娜丝塔西亚": "Anastasia",
"乌特拉夫斯": "Utraves",
"亚历山德拉": "Alexandra",
"亚莉克希亚": "Alexia",
"亚里斯多德": "Aristotle",
"伊莱克特拉": "Electra",
"克丽斯蒂娜": "Christina",
"克莱门蒂娜": "Clementine",
"克里斯蒂娜": "Kristina",
"克里斯蒂安": "Christiane",
"娜费尔里娅": "Naferia",
"娜阿拉依扎": "Nazélie",
"库尔尼科娃": "Kournikova",
"斯索罗亚斯": "Szoroyas",
"普里西莉娅": "Priscillia",
"波多尔斯基": "Podolski",
"特拉夫斯基": "Travsky",
"玛格达雷娜": "Magdalena",
"索罗亚斯德": "Zoroaster",
"让. 莫里": "Jean Maury",
"诺查丹玛斯": "Nostradamus",
"阿德里亚娜": "Adriana",
"乌洛琉斯": "Ouroreus",
"亚得里安": "Adrian",
"亚德里恩": "Adrian",
"伊丽莎白": "Elizabeth",
"伊利亚特": "Iliad",
"伊萨蒂斯": "Ysatis",
"伊萨贝拉": "Isabella",
"伯克伦德": "Boklund",
"佩内洛普": "Penelope",
"克丽丝汀": "Christine",
"克劳迪娅": "Claudia",
"克劳迪娜": "Claudina",
"克尔维特": "Corvette",
"克拉丽斯": "Clarice",
"克拉瑞特": "Clarette",
"克洛蒂尔": "Clothilde",
"克莉斯婷": "Christine",
"克莉斯汀": "Kristine",
"克莉斯蒂": "Kristie",
"克里斯丁": "Christin",
"克里斯泰": "Chrystalle",
"克里斯蒂": "Kristy",
"克里维斯": "Krivis",
"兰尔乌斯": "Ranerose",
"凯特琳娜": "Katrina",
"凯瑟琳娜": "Catherina",
"加拉哈德": "Galahad",
"勒凡克斯": "Levanx",
"博奥特赞": "Bootzheim",
"博格莱姆": "Borgrim",
"卡塔丽娜": "Katalina",
"卡桑德拉": "Kassandra",
"卡梅莉娅": "Kamélia",
"卡特琳娜": "Katerina",
"卡维图瓦": "Kavitua",
"厄德里特": "Edelite",
"嘉德丽雅": "Cattleya",
"图斯塔曼": "Tusitaman",
"埃利奥娜": "Eliona",
"埃尔德兰": "Eldelain",
"埃尔斯坦": "Erstein",
"埃斯泰拉": "Estella",
"埃斯特尔": "Estelle",
"塔提安娜": "Tatiana",
"塞尼奥尔": "Senor",
"塞莱斯汀": "Celestine",
"塞西莉亚": "Cecilia",
"多拉斯特": "Doraster",
"奥利维亚": "Olivia",
"奥尔坦斯": "Hortense",
"奥蕾莉娅": "Aurelia",
"威廉姆斯": "Williams",
"娜塔丽娜": "Natalina",
"安·丽丝": "Anne-Lise",
"安博威特": "Anbowitt",
"安吉丽娜": "Angelina",
"安吉里克": "Angelique",
"安德丽娅": "Andrea",
"安德莱拉": "Andrela",
"安托内特": "Antonette",
"安提哥努": "Antigonus",
"巴洛特式": "Balotte",
"布斯卡洛": "Buscalo",
"布莱娅娜": "Bryanna",
"布里吉特": "Brigitte",
"布里塔尼": "Brittany",
"帕特里夏": "Patricia",
"康斯坦斯": "Constance",
"弗洛伦德": "Florent",
"提尔兰特": "Tyrand",
"斯图亚特": "Stuart",
"斯蒂芬妮": "Stephany",
"普里西拉": "Priscilla",
"普阿利斯": "Pualis",
"普鲁登丝": "Prudence",
"曼莫瑞斯": "Manmoryce",
"柯尼赛格": "Koenigsegg",
"格拉蒂丝": "Gladys",
"格罗塞尔": "Grossell",
"梅高欧丝": "Meigaosi",
"欧弥贝拉": "Omibella",
"欧莉雅娜": "Oriana",
"欧菲丽娅": "Ophelia",
"沽雯都琳": "Gwendolyn",
"温彻斯特": "Winchester",
"玛丽·璐": "Mary-Lou",
"玛丽丽丝": "Marylise",
"玛丽安娜": "Marianna",
"玛格丽特": "Margaret",
"玛格蕾斯": "Margareth",
"玛特丽卡": "Matrika",
"珀西瓦尔": "Percival",
"瑞克鲁斯": "Recruise",
"瓦伦汀娜": "Valentina",
"瓦欧里特": "Waoulite",
"瓦莱里娅": "Valeria",
"索尔维格": "Solveig",
"维吉尼亚": "Virginia",
"维多利亚": "Victoria",
"维罗尼卡": "Veronica",
"缇尼科尔": "Tinicole",
"罗丝雷恩": "Roselyn",
"罗克福尔": "Roquefore/Rockerfell",
"罗克莎娜": "Roxana",
"艾丽安娜": "Arianna",
"艾弥留斯": "Amyrius",
"艾德里克": "Edrick",
"艾德雯娜": "Edwina",
"艾梅林达": "Emelinda",
"艾莉西亚": "Alyssia",
"艾莉西娅": "Elicia",
"艾蕾希娅": "Elicia",
"艾露西亚": "Alucia",
"艾露西娅": "Alucia",
"艾默里克": "Aymerick",
"苏伊赛德": "Sueseid",
"英尔维格": "Inervig",
"茜尔瓦娜": "Silvana",
"莉莉罗斯": "Lily-Rose",
"莎莉丝特": "Solicet",
"莫伦特斯": "Morientes",
"莫里亚蒂": "Moriarty",
"莫里赛特": "Morissette",
"菩提学院": "Bồ Đề Học Viện",
"菲妮斯汀": "Phinistine",
"菲尼克斯": "Phoenix",
"菲莉西亚": "Felicia",
"萨利卡多": "Saricardo",
"萨布丽娜": "Sabrina",
"萨菲尔兰": "Safilan",
"萨菲罗斯": "Safiros",
"蒙斯托克": "Monstoke",
"西尔维娅": "Sylvia",
"西莱斯特": "Seleste",
"诺夫斯基": "Nowfski",
"贝伦妮斯": "Berenice",
"贝克兰德": "Backlund",
"贝奥斯特": "Béosetre",
"贝尔纳黛": "Bernarde",
"费内波特": "Phineport",
"费尔南多": "Fernando",
"赞格威尔": "Zangwill",
"赫尔克里": "Hercule",
"达格利什": "Dalglish",
"达达尼尔": "Dardanelles",
"阿尔伯塔": "Alberta",
"阿尔贝特": "Alberte",
"阿拉尼斯": "Alanis",
"阿斯薇米": "Aswimi",
"阿梅丽娅": "Amelia",
"阿特弥斯": "Artemis",
"阿罗德斯": "Arrods",
"阿莱西亚": "Alessia",
"阿蕾科沙": "Alexa",
"阿里安娜": "Arianna",
"雪尔曼斯": "Shermans",
"雷恩多纳": "Rendona",
"霍尔默斯": "Holmes",
"高卢纳洛": "Gaulnaro",
"黛丝蒂妮": "Destiny",
"齐林格斯": "Zilingus",
"丹妮丝": "Denise",
"丹妮尔": "Danielle",
"丹涅拉": "Daniela",
"丽奈特": "Lynette",
"丽桑日": "Lysange",
"丽贝卡": "Rebekka",
"乌托邦": "Utopia",
"乔丽安": "Jolianne",
"乔姬娜": "Georgina",
"乔安娜": "Joanna",
"乔治亚": "Georgia",
"乔治特": "Georgette",
"乔艾斯": "Joyce",
"亚纳尔": "Anael",
"亚维斯": "Javis",
"亚里诺": "Arino",
"什丽拉": "Shirila",
"以斯帖": "Esther",
"伊内丝": "Ines",
"伊劳拉": "Elora",
"伊尔玛": "Irma",
"伊康瑟": "Ikanser",
"伊琳娜": "Irene",
"伊琳斯": "Irene",
"伊罗娜": "Ilona",
"伊莉娜": "Irina",
"伊莲娜": "Elena",
"伊萨贝": "Isabell",
"休斯特": "Hilst",
"伯拉罕": "Abraham",
"佐伊克": "Zoïk",
"佛尔思": "Forsi",
"佩索特": "Pesot",
"依拉娜": "Ilana",
"俄罗斯": "Russia",
"克丽丝": "Christy",
"克丽娜": "Khelina",
"克劳汀": "Claudine",
"克劳泽": "Clauser",
"克劳迪": "Claudy",
"克拉格": "Cragg",
"克罗浦": "Croff",
"克莱尔": "Claire",
"克莱恩": "Klein",
"克莱拉": "Clara",
"克莱格": "Greg",
"克莱莉": "Clary",
"兰比斯": "Rambis",
"兰里斯": "Lanlice",
"凡露徳": "Vander",
"凡露德": "Vander",
"凯勒尔": "Keiler",
"凯尔塞": "Kelsey",
"凯尔文": "Kelvin",
"凯尔斯": "Kells",
"凯特琳": "Kaitlin",
"凯瑟琳": "Kathleen",
"凯莉安": "Kerry-Anne",
"切尔西": "Chelsey",
"利卡多": "Ricardo",
"利齐耶": "Lizier",
"加斯东": "Gaston",
"加里古": "Garrigue",
"劳丽安": "Lorianne",
"劳伦斯": "Laurence",
"卡丽安": "Karianne",
"卡伯里": "Carberry",
"卡列多": "Careto",
"卡奥恩": "Caoimhe",
"卡尔德": "Kảd",
"卡尔莉": "Carlee",
"卡提亚": "Katia",
"卡梅隆": "Cameron",
"卡比拉": "Kabila",
"卡特琳": "Katerine",
"卡米尔": "Camyl",
"卡罗兰": "Karolanne",
"卡罗尔": "Carol",
"卡耐斯": "Canise",
"卡莉丝": "Karis",
"卡莉娜": "Karina",
"卡蕾娜": "Carena",
"卡隆珀": "Charonper",
"卡雷乐": "Karelle",
"卢修斯": "Lucius",
"卢利安": "Lorian",
"卢米安": "Lumian",
"吉尔森": "Gilson",
"吉赛尔": "Gisele",
"哈加提": "Haagenti",
"哥特式": "Gothic",
"唐泰斯": "Dantes",
"嘉兰丝": "Garance",
"因蒂斯": "Intis",
"圣纳洛": "St. Naro",
"坎迪丝": "Candice",
"坎迪斯": "Candace",
"坦尼斯": "Tanis",
"埃姆林": "Emlyn",
"埃布特": "Abott",
"塔尼娅": "Tania",
"塔玛拉": "Tamara",
"塔罗斯": "Talos",
"塔芭塔": "Tabatha",
"塔莉娅": "Thalia",
"塞伦佐": "Serenzo",
"塞加尔": "Segar",
"塞蕾娜": "Selena",
"塞雷娜": "Serena",
"夏布罗": "Jablo",
"夏洛克": "Sherlock",
"夏洛特": "Charlotte",
"夏绿蒂": "Charlotte",
"多丽丝": "Doris",
"多萝西": "Dorothy",
"多里安": "Dorian",
"奥佩尔": "Opel",
"奥兰达": "Orlanda",
"奥利维": "Olive",
"奥尼尔": "O 'neil",
"奥萝尔": "Aurore",
"奥萨苏": "Osasu",
"奥赛罗": "Othello",
"奥黛丽": "Audrey",
"妮什塔": "Nishta",
"妮妮萝": "Niniro",
"威尔第": "Verdi",
"娜塔莉": "Natalie",
"娜塔莎": "Natasha",
"娜罗卡": "Naroka",
"娜迪娅": "Nadia",
"安其罗": "Angelo",
"安博威": "Embraer",
"安博芬": "Anbophine",
"安吉拉": "Angela",
"安妮特": "Annette",
"安妮莎": "Anissa",
"安尼克": "Annick",
"安德拉": "Andra",
"安德斯": "Anders",
"安德莉": "Andree",
"安琪尔": "Angel",
"安西娅": "Anthea",
"安迪恩": "Andien",
"尼琦塔": "Nikita",
"尼科尔": "Nicole",
"巴洛特": "Balotte",
"巴蒙德": "Bamond",
"巴里特": "Barit",
"布兰达": "Brenda",
"布提斯": "Botis",
"布莱妮": "Bryony",
"布鲁克": "Brooke",
"希碧乐": "Sibylle",
"希莉娅": "Celia",
"帕列斯": "Pales",
"帕洛沙": "Palusa",
"帕特茜": "Patsy",
"帕米拉": "Pamela",
"弗兰克": "Frankie",
"弗朗丝": "France",
"弗罗拉": "Flora",
"弗萨克": "Fusac",
"德兰克": "Delank",
"恩尤尼": "Enyouni",
"恩格斯": "Engels",
"戴安娜": "Diana",
"戴维娜": "Davina",
"扎克利": "Zakery",
"拉奎拉": "L'Aquila",
"拉弥亚": "Lamia",
"拉扎尔": "Lazar",
"拉文第": "Lavindi",
"拜亚姆": "Bayam",
"斯卡拉": "Scala",
"斯嘉丽": "Scarlett",
"斯塔琳": "Starling",
"斯帕罗": "Sparrow",
"斯特拉": "Stella",
"斯罗德": "Serode",
"斯黛茜": "Stacey",
"昂赛汀": "Asceptin",
"普雷斯": "Pres",
"暗沙罗": "Dark Saros",
"朱丽娅": "Julia",
"朱纳克": "Junak",
"朱迪思": "Judith",
"杰克森": "Jackson",
"杰奎琳": "Jacklyn",
"杰弗逊": "Jefferson",
"杰西卡": "Jessyca",
"柏妮丝": "Bernice",
"查德森": "Chadson",
"查拉图": "Zarath",
"查理兹": "Charlize",
"查莲娜": "Charlena",
"柯莱特": "Colette",
"格尔兰": "Gerlan",
"格尔曼": "Gehrman",
"格蕾丝": "Grace",
"桑德拉": "Sandra",
"梅丽尔": "Meryl",
"梅丽莎": "Melissa",
"梅兰妮": "Melany",
"梅尔巴": "Melba",
"梅洛迪": "Melody",
"欧内斯": "Ernes",
"歌瑞丝": "Greese",
"比尔特": "Billt",
"比戈尔": "Bigorre",
"毕夏普": "Bishop",
"法兰克": "Frank",
"法斯琪": "Vashj",
"法林顿": "Flinton",
"法蒂玛": "Fatima",
"泰晤士": "Thames",
"泽维尔": "Xavier",
"洛丽塔": "Lolita",
"洛伦佐": "Laurent",
"洛斯林": "Roselin",
"洛薇雅": "Lovia",
"洛黛尔": "Rodel",
"海柔尔": "Hazel",
"海瑟薇": "Hathaway",
"温德曼": "Undeman",
"爱丁堡": "Edinburgh",
"爱丽丝": "Elise",
"爱丽莎": "Elisa",
"爱丽霞": "Elysia",
"牧星寒": "Mục Tinh Hàn",
"特丽娜": "Treena",
"特勒斯": "Terrace",
"特瑞萨": "Tricia",
"特莉丝": "Tris",
"特蕾西": "Tracey",
"特里尔": "Trier/Terril",
"特雷茜": "Tracy",
"玛丽亚": "Maria",
"玛丽卡": "Marika",
"玛丽娜": "Marina",
"玛丽安": "Maryanne",
"玛丽琳": "Marilyne",
"玛丽莎": "Marisa",
"玛伊芙": "Maeve",
"玛伊雯": "Maiwen",
"玛修亚": "Mathewa",
"玛可欣": "Maxine",
"玛希斯": "Mathis",
"玛德琳": "Madeline",
"玛罗丽": "Malorie",
"玛艾克": "Maaike",
"珍妮特": "Jeanette",
"珍尼弗": "Jennifer",
"理亚迪": "Riady",
"琳蒂娅": "Lindia",
"瓦伦汀": "Valentine",
"瓦伦泰": "Valentine",
"瓦哈娜": "Vahana",
"碧昂卡": "Bianca",
"碧昂斯": "Beyonce",
"科尔杜": "Cordu",
"科尔格": "Kerg",
"科恩黎": "Keenli",
"科斯蒂": "Kirsty",
"科洛林": "Coroline",
"科琳娜": "Corinna",
"穆丽尔": "Muriel",
"笆笆拉": "Barbara",
"米凯拉": "Michaela",
"米歇尔": "Michelle",
"米索尔": "Missor",
"米蕾娜": "Milena",
"米里安": "Myriam",
"索尼娅": "Sonia",
"索拉扎": "Soraza",
"索斯特": "Soest",
"索罗亚": "Soroya",
"索菲娅": "Sofia",
"约瑟芬": "Josephine",
"约翰娜": "Johanna",
"纪尧姆": "Guillaume",
"纳奥米": "Naomie",
"纳迪娜": "Nadina",
"维京人": "Vikings",
"维纳斯": "Venus",
"维维安": "Viviane",
"罗伊丝": "Loyce",
"罗伯塔": "Roberta",
"罗克珊": "Roxanne",
"罗塞尔": "Rosall",
"罗思德": "Rosid",
"罗瑞德": "Lorette",
"美莲达": "Melinda",
"翠妮缇": "Trinity",
"老尼尔": "old Neil",
"考特尼": "Courtney",
"考特曼": "Courtman",
"艾丽丝": "Elyse",
"艾丽卡": "Erika",
"艾丽安": "Arianne",
"艾丽萨": "Elissa",
"艾什莉": "Ashley",
"艾利克": "Eric",
"艾尔兰": "Ireland",
"艾尔莎": "Elsa",
"艾德娜": "Edna",
"艾德琳": "Adeline",
"艾普尔": "April",
"艾米莉": "Emily",
"艾维克": "Avic",
"艾维琳": "Eveline",
"艾美拉": "Amyra",
"艾芙琳": "Evelyne",
"艾莉娜": "Elina",
"艾莉森": "Allison",
"艾莉莎": "Alyssa",
"艾莉萨": "Elissa",
"艾萝依": "Eloise",
"艾薇儿": "Avrile",
"艾薇雅": "Evija",
"艾诺泽": "Enoze",
"艾辛格": "Isinger",
"芭贝特": "Babette",
"苏亚兰": "Suaran",
"苏哈托": "Suharto",
"苏尼亚": "Sonia",
"苏希特": "Suhit",
"苏菲娅": "Sophia",
"英格丽": "Ingrid",
"莉亚娜": "Liana",
"莉安娜": "Leona",
"莉莉丝": "Lilith",
"莉莉安": "Liliane",
"莉蒂娅": "Lydia",
"莎乐美": "Salomay",
"莫妮卡": "Monica",
"莫瑞斯": "Morris",
"莫瑞纳": "Morina",
"莫里斯": "Morris/Maurice",
"莱丝莉": "Lesly",
"莱斯塔": "Sélestat",
"莱斯顿": "Riston",
"菲丽丝": "Phyllis",
"菲利帕": "Philippa",
"菲奥娜": "Fiona",
"菲米莎": "Phimisha",
"菲莉帕": "Philipppa",
"萨凡纳": "Savannah",
"萨拉玛": "Salama",
"萨维格": "Saviger",
"萨莱克": "Saleck",
"萨蒂娜": "Satina",
"萨鲁格": "Saluger",
"萨麦尔": "Samael",
"葛特丹": "Gatedan",
"蒂凡妮": "Tiffany",
"蕾切尔": "Rachel",
"蕾吉娜": "Regina",
"蕾奥妮": "Leonie",
"蕾妮特": "Renytre",
"蕾拉妮": "Leilany",
"蕾蒂夏": "Letitia",
"藿莉安": "Holian",
"西尔维": "Sylvie",
"西比尔": "Sybil",
"詹妮丝": "Janice",
"诺基亚": "Nokia",
"诺必多": "Nobito",
"谢丽尔": "Cheryl",
"谢尔碧": "Shelby",
"贝克朗": "Bakerland",
"贝德文": "Berdwin",
"费利佩": "Felipe",
"贾斯汀": "Justine",
"贾维顿": "Javiton",
"赛图雅": "Shatoya",
"赛茜儿": "Cecile",
"赛韦尔": "Sewell",
"赫密斯": "Hermes",
"路易丝": "Louise",
"路西恩": "Lucien",
"辛西娅": "Cynthia",
"达克威": "Darkway",
"达列日": "Dariège",
"达利拉": "Dalila",
"达娅娜": "Dayana",
"达尔西": "Dulcie",
"达尼兹": "Danis",
"达拉维": "Dharavi",
"达芙妮": "Daphne",
"迪克森": "Dickson",
"通古斯": "Tungus",
"里德尔": "Riddle",
"金伯利": "Kimberley",
"金塔勒": "Ginthelo",
"金蔗尔": "Ginger",
"阿什琳": "Ashlyn",
"阿努克": "Anouk",
"阿卡那": "Acarna",
"阿妮斯": "Anis",
"阿尔托": "Alto",
"阿曼达": "Amanda",
"阿泽玛": "Azéma",
"阿涅丝": "Agnes",
"阿涅斯": "Agnès",
"阿耐斯": "Anaïs",
"阿苏拉": "Azura",
"阿莉森": "Alisson",
"阿莉萨": "Alissa",
"阿莫里": "Amori",
"阿莱克": "Alek",
"阿西亚": "Asia",
"阿黛尔": "Adele",
"雅内尔": "Yannel",
"雅斯敏": "Yasmine",
"雷蒙德": "Raymond",
"雷诺尔": "Renault",
"露茜娅": "Lucia",
"马戴娜": "Madena",
"马瑞赛": "Maryse",
"马赫特": "Macht",
"马里奇": "Maric",
"马锡尔": "Marsil",
"鲁塞尔": "Rusel",
"鲁瑟兰": "Lutheran",
"麦斯顿": "Maston",
"麦迪逊": "Madison",
"黛博拉": "Deborah",
"黛安娜": "Diana",
"齐柏林": "Zeppelin",
"丹娜": "Dana",
"丽丝": "Lise",
"丽莎": "Lysa",
"乌娜": "Oona",
"乔伊": "Joy",
"乔安": "Johanne",
"乔治": "George",
"伊夫": "Eve",
"伊娃": "Eva",
"伊文": "Ywen",
"伦堡": "Lenburg",
"伯尼": "Bonnie",
"佐伊": "Zoe",
"佩吉": "Peggy",
"佩妮": "Penny",
"依凡": "Yvaine",
"侨顿": "Johnton",
"克丽": "Clea",
"兹蒂": "Zettie",
"凯拉": "Keira",
"凯特": "Kate",
"凯琳": "Karen",
"凯耶": "Kaye",
"凯莉": "Kelly",
"凯蒂": "Katy",
"凯西": "Cathy",
"劳伦": "Lorene",
"劳拉": "Laura",
"劳琳": "Laurine",
"南茜": "Nancy",
"博格": "Borg",
"博比": "Bobbie",
"卡口": "Kako",
"卡娅": "Kaya",
"卡拉": "Karla",
"卡特": "Katel",
"卡罗": "Karo",
"卡茜": "Cathy",
"卡里": "Caly",
"卡门": "Carmen",
"吉亚": "Gea",
"吉妮": "Jinny",
"吉娜": "Gina",
"吉森": "Giessen",
"哥特": "Gothic",
"哥顿": "Gordon",
"唐娜": "Donna",
"唐尼": "Donny",
"埃兰": "Elam",
"塔米": "Tammy",
"夏克": "Shack",
"夏莲": "Charlène",
"多尔": "Doll",
"多拉": "Dora",
"多琳": "Doreen",
"奥莱": "Aulay",
"妮娜": "Nina",
"娅娅": "Yaya",
"娅娜": "Iana",
"娜丁": "Nadine",
"孟雷": "Mạnh Lôi",
"安伯": "Amber",
"安吉": "Angie",
"安妮": "Annie",
"安娜": "Anna",
"宋雅": "Sonja",
"宝拉": "Paula",
"宝林": "Pauline",
"尔克": "Erke",
"尼尔": "Neil",
"崔娜": "Trina",
"巴库": "Baku",
"巴赫": "Bach",
"希拉": "Shiela",
"希瑟": "Heather",
"希贝": "Sybelle",
"帕列": "Pale",
"帕姆": "Pam",
"帕托": "Pato",
"帕斯": "Paz",
"庞克": "Punk",
"弗瑞": "Fry",
"德比": "Debby",
"德鲁": "Drew",
"戴莉": "Daly",
"戴西": "Daisy",
"托尼": "Tony",
"托莉": "Tori",
"拉丽": "Laly",
"拉琪": "Rosy",
"拜朗": "Balam",
"敦灵": "Dunling",
"斐烈": "Feilie",
"斑比": "Bambi",
"斯隆": "Sloane",
"旺达": "Wanda",
"昂卡": "Anca",
"昆斯": "Koons",
"晒垃": "Sheila",
"曼蒂": "Mandy",
"朱丽": "Julie",
"朱恩": "June",
"朱蒂": "Judy",
"朱迪": "Jody",
"杰丹": "Jaidan",
"杰妮": "Jani",
"杰姬": "Jackie",
"杰宁": "Jeannine",
"杰米": "Jayme",
"杰西": "Jessy",
"林赛": "Lindsay",
"查琳": "Charleen",
"查莲": "Charlene",
"桑迪": "Sandy",
"梅格": "Meg",
"梅琳": "Mayleen",
"梅莲": "Maylene",
"梅香": "Mai Hương",
"汉娜": "Hannah",
"沃尔": "Wall",
"沙妮": "Shanie",
"沙琳": "Shaleen",
"沙罗": "Saro",
"泰娜": "Taina",
"泰拉": "Tara",
"泰朗": "Tyrone",
"海伦": "Helen",
"海瑟": "Heather",
"海莉": "Hayley",
"海蒂": "Heidy",
"温蒂": "Wendy",
"爱兰": "Ailann",
"特里": "Terry",
"玛丽": "Mary",
"玛吉": "Maggy",
"玛妮": "Mani",
"玛姬": "Maggie",
"玛琳": "Marlene",
"玛莎": "Martha",
"玛雅": "Maya",
"珍妮": "Jenny",
"珍娜": "Jenna",
"珍珠": "Pearl",
"琦拉": "Kira",
"琳达": "Lynda",
"璐娜": "Luna",
"甘蒂": "Candy",
"盖娅": "Gaea",
"盖尔": "Gaelle",
"碧碧": "Bibi",
"福克": "Fock",
"科佩": "Coppet",
"科克": "Cork",
"科勒": "Kohler",
"科妮": "Conny",
"科斯": "Koss",
"科琳": "Kelyne",
"穆琳": "Maureen",
"米娅": "Mia",
"米娜": "Minna",
"索伦": "Sauron;Solon",
"维京": "Viking",
"维吉": "Vicky",
"缇娅": "Tia",
"缇欧": "Tio",
"罗密": "Romy",
"罗尔": "Laure",
"罗拉": "Lola",
"罗斯": "Rose",
"翠西": "Tracy",
"肖恩": "Shawn",
"艾伦": "Ellen",
"艾奇": "Archer",
"艾拉": "Ella",
"艾文": "Alvin",
"艾玛": "Emma",
"艾琳": "Eileen",
"艾米": "Émi",
"艾美": "Amy",
"艾莉": "Elle",
"艾诺": "Eno",
"艾辛": "Aisin",
"芘尔": "Pear",
"苏塞": "Suzel",
"苏珊": "Suzanne",
"苏莲": "Solenne",
"苏西": "Suzie",
"范茜": "Fancy",
"茉德": "Maud",
"茉莉": "Molly",
"茜娜": "Sheena",
"茜蒙": "Simone",
"荷莉": "Holly",
"莉丝": "Liz",
"莉塔": "Rita",
"莉娜": "Lina",
"莉安": "Rhianne",
"莉拉": "Lyla",
"莉碧": "Libby",
"莉莉": "Lily",
"莉蒂": "Lydie",
"莉雅": "Leah",
"莎伦": "Sharon",
"莎侬": "Shannon",
"莎娜": "Shana",
"莎拉": "Sarah",
"莎纳": "Shona",
"莎莉": "Shary",
"莫尼": "Mony",
"莫琳": "Moreen",
"莫里": "Maury",
"莱茵": "Loen",
"莲娜": "Nina",
"萝莉": "Laury",
"萝莎": "Rosa",
"萝西": "Rosy",
"萨妮": "Sanny",
"萨宾": "Sabine",
"萨尔": "Sal",
"萨满": "Shaman",
"萨蒂": "Sadie",
"蒂娜": "Tina",
"蒙娜": "Mona",
"蓬斯": "Ponse",
"蕾妮": "Renee",
"蕾拉": "Layla",
"蕾珍": "Rejane",
"薇琪": "Vicki",
"西维": "Sivy",
"诺丽": "Nori",
"诺娃": "Nova",
"诺尔": "Noelle",
"诺拉": "Norah",
"诺文": "Novan",
"诺阿": "Noa",
"谢莉": "Shelley",
"贝内": "Bénet",
"贝基": "Becky",
"贝琪": "Betsy",
"贝罗": "Bello",
"贝蒂": "Betty",
"贝里": "Berry",
"贝露": "Beru",
"费内": "Ferney",
"费尔": "Verl",
"贾奇": "Jaquie",
"贾妮": "Jany",
"贾德": "Jade",
"赫尔": "Hull",
"赫温": "Hvin",
"辛迪": "Cindy",
"迪娜": "Dina",
"道恩": "Dawn",
"邵娜": "Shauna",
"金斯": "Kins",
"铁坦": "Titan",
"阿娃": "Ava",
"阿娅": "Aya",
"阿碧": "Abie",
"隆德": "Longde/Rond",
"雪伦": "Sharon",
"雪莉": "Shirley",
"雪莱": "Shelly",
"雷欧": "Leo",
"霍金": "Hawking; Hawkins",
"露丝": "Ruth",
"露西": "Lucy",
"马锡": "Masin",
"高卢": "Gaul",
"鲁恩": "Loen",
"黛安": "Diane" };
            let Han=Object.keys(Names);
            Han.sort((a,b) => (b.length -a.length));
            let maxLength=Han[0].length+1;

            for (let i=0; i<text.length; i++) {
                if (text.charAt(i) == '\u0528') continue;
                for (let j=maxLength; j>1;j--) {
                    let HanViet=Names[text.substring(i,(i+j))];  ////////////////
                    if (HanViet == undefined) continue;
                        tmpArr.pos=i;
                        tmpArr.orgText=text.substring(i,i+j);
                        tmpArr.transText=HanViet;
                        tmpArr.dict='Names';
                        result.push(tmpArr);

                        text=text.replace(tmpArr.orgText,'\u0528'.repeat(tmpArr.orgText.length))
                        i+=tmpArr.orgText.length-1;
                        tmpArr={};
                }

            }//end for

            Han=Object.keys(VietPhrase);
            Han.sort((a,b) => (b.length -a.length));
            maxLength=Han[0].length+1;

            for (let i=0; i<text.length; i++) {
                if (text.charAt(i) == '\u0528') continue;
                for (let j=maxLength; j>1; j-- ) {
                    let HanViet=VietPhrase[text.substring(i,(i+j))]; ////////////////
                    if (HanViet == undefined) continue;
                        tmpArr.pos=i;
                        tmpArr.orgText=text.substring(i,i+j);
                        if (Options.VPmotnghia) tmpArr.transText=HanViet.split(Daucachnghia)[0]; // Mot nghia
                        else tmpArr.transText=HanViet;  // nhieu nghia

                        if (Options.Ngoac) tmpArr.transText='['+tmpArr.transText + ']';  //dau ngoac VP
                        tmpArr.dict='VP';
                        result.push(tmpArr);

                        text=text.replace(tmpArr.orgText,'\u0528'.repeat(tmpArr.orgText.length))
                        i+=tmpArr.orgText.length-1;
                        tmpArr={}; // must create new object, the existing one is just pushed in to result by reference
                }
            }//end for


            let dichlieuArr =['的','了','著'];
            if (Options.Xoadichlieutru) dichlieuArr.forEach(word => text=text.replaceAll(word,'\u0528'));
            //convert PhienAm
            for (let i=0; i<text.length; i++) {
                let char=text.charAt(i);
                if (char=='\u0528') continue; //bo mat khoang trang giua 2 chu, pahi thay lai. Chi xay ra khi chay tren cac ky tu kophai tieng trung quoc do tieng tq viet lien

                while (text.indexOf(char) >=0 ) {
                    tmpArr.pos=text.indexOf(char);
                    tmpArr.orgText=char;
                    tmpArr.transText=PhienAm[char];
                    tmpArr.dict='PhienAm';
                    if (tmpArr.transText == undefined) {
                        tmpArr.transText=tmpArr.orgText;
                        tmpArr.dict='FA'; }
                    result.push(tmpArr);
                    text=text.replace(char,'\u0528');
                    tmpArr={}; // must create new object
                }
            } //end for

            //result=[...new Set(result)];
            result.sort((a,b) => (a.pos -b.pos));

            let returnText=result[0].transText;
            for (let i=1;i<result.length; i++)
               if (result[i].dict == 'FA' && result[i-1].dict == 'FA') returnText+=result[i].transText;
               else returnText+=' ' + result[i].transText;

            translateCount++;
            return returnText;
        } //end function


function translate(text, dict,safe=true) {
    let Viet='';
    text=text.replaceAll('&nbsp;',' ');

    for (let Han in dict) {
        if (safe) Viet =htmlEntities(dict[Han]);
        else Viet = dict[Han];

        if (Options.VPmotnghia) Viet=Viet.split(Daucachnghia)[0];

        if (Options.Xoadichlieutru &&dict=='PhienAm') {
            let dichlieuArr =['的','了','著'];
            dichlieuArr.foreach(word => text=text.replaceAll(word,'')); }

        if (Options.Ngoac && dict==VietPhrase) text=text.replaceAll(Han,'['+Viet+'] ');
        else text=text.replaceAll(Han,Viet+' ');
    } //End for

    let pointAtEnd=false;
    if (text.charAt(text.length-1)=='。') pointAtEnd=true;

    let lines=text.split('。');
    let newline='';
    lines.forEach((line) => {
        line = line.trim();
        if (line) newline += line.charAt(0).toUpperCase()+line.slice(1)+'. ';
        });

    if (!pointAtEnd) newline=newline.substring(0,newline.length-2);
    text=newline.replaceAll(/  +/g,' '); // thay nhieu dau cach lien nhau ve 1 dau cach

    translateCount++;
    return text;
} //End function

function translateNode(domNode) {
    let stackToStockThings=[];

    function Imtired (domNode) {
        if (!domNode) return;
        if (domNode.nodeType == 3) {
            stackToStockThings.push(domNode);
            return; }

      if (domNode.nodeType != 1) return;
      if (domNode.tagName && ',OBJECT,FRAME,FRAMESET,IFRAME,SCRIPT,EMBD,STYLE,BR,HR,TEXTAREA,'.indexOf(',' + domNode.tagName.toUpperCase() + ',') > - 1) return;
      if (domNode.tagName && domNode.type && domNode.tagName.toUpperCase() == 'INPUT' && ',button,submit,reset,'.indexOf(domNode.type.toLowerCase()) > - 1)
        domNode.value = translate(domNode.value,PhienAm);

      for (var i = 0, j = domNode.childNodes.length; i < j; i++) Imtired(domNode.childNodes[i]);
    } //End function Imtired

    Imtired(domNode);
    console.log(stackToStockThings.length);
    let text='', tmpArr=[];
    for (let i=0; i<stackToStockThings.length; i++) text+=stackToStockThings[i].nodeValue + '\uf0f3'.repeat(1);  //repeat 3 takes longer than repeat 2 ~~10%
    text=translateByOrder(text);
    //text=translate(text,Names,false);
    //text=translate(text,VietPhrase,true);
    //text=translate(text,PhienAm,false);
    tmpArr=text.split('\uf0f3'.repeat(1));
    for (let i=0; i<stackToStockThings.length; i++) stackToStockThings[i].nodeValue=tmpArr[i];
}


(function() {
    'use strict';

    let mouseClick2 = function () {
        console.time('Translate 2');
        document.title= translate(document.title,PhienAm);
        translateNode(document.body);
        document.body.style.fontFamily = `arial,sans-serif;`
        console.timeEnd('Translate 2');
        console.log(translateCount);}

    let mouseClick1= function () {
        console.time('Translate 1');
        document.title= translate(document.title,PhienAm);
        document.body.innerHTML= translate(document.body.innerHTML,Names); //Names dat trong file require o header
        document.body.innerHTML= translate(document.body.innerHTML,VietPhrase); //VietPhrase dat trong file require o header, ghi ra co []
        document.body.innerHTML= translate(document.body.innerHTML,PhienAm); //PhienAm dat trong file require o header
        document.body.style.fontFamily = `arial,sans-serif;`
        console.timeEnd('Translate 1');
        console.log(translateCount);}

    let menuClick= function () {
        if (document.getElementById('menuBtn').innerText =='↓') {
            document.getElementById('menuBtn').innerText= '↔';
            menuOption.style.display="block";
        } else {
            document.getElementById('menuBtn').innerText ='↓';
            menuOption.style.display="none";
        }
        console.log(GM_getValue('Options'));
    }


    const transButton=document.createElement("div");
    transButton.style="display: inline-flexbox; position: fixed;top: 1%; right:1%; margin: 0px; padding: 0px; border: thin; z-index:99999";

    const button1=document.createElement("button");
    button1.innerText="Tran";
    button1.style= "height:90%; border: none; text-align:right; padding: 5px 0px 5px 5px; margin:0px;";
    button1.onclick=mouseClick1;
    transButton.appendChild(button1);

    const button2=document.createElement("button");
    button2.innerText="slate";
    button2.style= "height:90%; border: none; text-align:left; padding: 5px 5px 5px 0px; margin:0px;";
    button2.onclick=mouseClick2;
    transButton.appendChild(button2);

    const updateOptions = function (e) {
        console.log(e);
        switch (e.target.id) {
            case 'chkNgoac':
                Options.Ngoac=e.target.checked; break;
            case 'chkMotnghia':
                Options.VPmotnghia=e.target.checked; break;
            case 'chkDichlieutru':
                Options.Xoadichlieutru=e.target.checked; break;
        } //end switch

        GM_setValue("Options",JSON.stringify(Options));
    }//End function

    const menuBtn=document.createElement("button");
    menuBtn.id='menuBtn';
    menuBtn.innerText="↓"; // ↓  ↔
    menuBtn.style= "height:90%; border: none; text-align:right; padding:5px 0px 5px 0px; margin:0px;";
    menuBtn.onclick=menuClick;
    transButton.appendChild(menuBtn);

    document.body.appendChild(transButton);

    const menuOption=document.createElement('div');
    menuOption.id='menuOption';
    let menuOption_top= transButton.offsetTop + transButton.offsetHeight; //chua add vao document nen chua co gia tri
    let menuOption_right= 5;
    menuOption.style='display:none; top: '+ menuOption_top +'px; right: ' + menuOption_right +'px; position: fixed; background-color: lightblue; margin:4px 7px 7px 7px; padding:4px 7px 7px 7px; border-radius: 10px;z-index:999999;';

    menuOption.innerHTML= '<fieldset style="border: 2px solid gray; padding: 5px; border-radius: 10px;"><legend>Các tùy chọn</legend>' +
`<input type="checkbox" id="chkNgoac" ><label for="chkNgoac"> Dùng [Vietphrase] </label></br>` +
`<input type="checkbox" id="chkMotnghia" ><label for="chkMotnghia"> Vietphrase một nghĩa </label></br>` +
`<input type="checkbox" id="chkDichlieutru" ><label for="chkDichlieutru"> Xóa đích, liễu, trứ </label></br>` +
'</fieldset>';

    document.body.appendChild(menuOption);
    document.getElementById('chkNgoac').onchange=updateOptions;
    document.getElementById('chkMotnghia').onchange=updateOptions;
    document.getElementById('chkDichlieutru').onchange=updateOptions;

    //GM_deleteValue('Options');
    let tmpOptions = GM_getValue('Options');
    if (tmpOptions != null) Options=JSON.parse(tmpOptions);

    document.getElementById('chkNgoac').checked=Options.Ngoac;
    document.getElementById('chkMotnghia').checked=Options.VPmotnghia;
    document.getElementById('chkDichlieutru').checked=Options.Xoadichlieutru;

})();

// Kana 150 vocab
const kanaVocab = [
  {jp:"あ",meaning:"a"},{jp:"い",meaning:"i"},{jp:"う",meaning:"u"},{jp:"え",meaning:"e"},{jp:"お",meaning:"o"},
  {jp:"か",meaning:"ka"},{jp:"き",meaning:"ki"},{jp:"く",meaning:"ku"},{jp:"け",meaning:"ke"},{jp:"こ",meaning:"ko"},
  {jp:"さ",meaning:"sa"},{jp:"し",meaning:"shi"},{jp:"す",meaning:"su"},{jp:"せ",meaning:"se"},{jp:"そ",meaning:"so"},
  {jp:"た",meaning:"ta"},{jp:"ち",meaning:"chi"},{jp:"つ",meaning:"tsu"},{jp:"て",meaning:"te"},{jp:"と",meaning:"to"},
  {jp:"な",meaning:"na"},{jp:"に",meaning:"ni"},{jp:"ぬ",meaning:"nu"},{jp:"ね",meaning:"ne"},{jp:"の",meaning:"no"},
  {jp:"は",meaning:"ha"},{jp:"ひ",meaning:"hi"},{jp:"ふ",meaning:"fu"},{jp:"へ",meaning:"he"},{jp:"ほ",meaning:"ho"},
  {jp:"ま",meaning:"ma"},{jp:"み",meaning:"mi"},{jp:"む",meaning:"mu"},{jp:"め",meaning:"me"},{jp:"も",meaning:"mo"},
  {jp:"や",meaning:"ya"},{jp:"ゆ",meaning:"yu"},{jp:"よ",meaning:"yo"},
  {jp:"ら",meaning:"ra"},{jp:"り",meaning:"ri"},{jp:"る",meaning:"ru"},{jp:"れ",meaning:"re"},{jp:"ろ",meaning:"ro"},
  {jp:"わ",meaning:"wa"},{jp:"を",meaning:"wo"},{jp:"ん",meaning:"n"},
  {jp:"ねこ",meaning:"ကြောင်"},{jp:"いぬ",meaning:"ခွေး"},{jp:"さかな",meaning:"ငါး"},{jp:"とり",meaning:"ငှက်"},{jp:"みず",meaning:"ရေ"},
  {jp:"たべる",meaning:"စားသည်"},{jp:"のむ",meaning:"သောက်သည်"},{jp:"みる",meaning:"မြင်သည်"},{jp:"きく",meaning:"ကြားသည်"},{jp:"はなす",meaning:"စကားပြောသည်"},
  {jp:"いく",meaning:"သွားသည်"},{jp:"くる",meaning:"လာသည်"},{jp:"あるく",meaning:"လမ်းလျှောက်သည်"},{jp:"はしる",meaning:"ပြေးသည်"},{jp:"よむ",meaning:"ဖတ်သည်"},
  {jp:"かく",meaning:"ရေးသည်"},{jp:"ねる",meaning:"အိပ်သည်"},{jp:"おきる",meaning:"နိုးသည်"},{jp:"しぬ",meaning:"သေသည်"},{jp:"うたう",meaning:"သီချင်းဆိုသည်"},
  {jp:"わらう",meaning:"ရယ်သည်"},{jp:"なく",meaning:"ငိုသည်"},{jp:"あそぶ",meaning:"ကစားသည်"},{jp:"まつ",meaning:"စောင့်သည်"},{jp:"もつ",meaning:"ကိုင်သည်"},
  {jp:"つかう",meaning:"သုံးသည်"},{jp:"つくる",meaning:"လုပ်သည်"},{jp:"かう",meaning:"ဝယ်သည်"},{jp:"うる",meaning:"ရောင်းသည်"},{jp:"しる",meaning:"သိသည်"},
  {jp:"わかる",meaning:"နားလည်သည်"},{jp:"おもう",meaning:"ထင်သည်"},{jp:"しんじる",meaning:"ယုံကြည်သည်"},{jp:"まなぶ",meaning:"သင်ယူသည်"},{jp:"おしえる",meaning:"သင်ပေးသည်"},
  {jp:"はじめる",meaning:"စသည်"},{jp:"おわる",meaning:"ပြီးသည်"},{jp:"あげる",meaning:"ပေးသည်"},{jp:"もらう",meaning:"လက်ခံသည်"},{jp:"かりる",meaning:"အငှားယူသည်"},
  {jp:"かえす",meaning:"ပြန်ပေးသည်"},{jp:"みせる",meaning:"ပြသည်"},{jp:"しめる",meaning:"ပိတ်သည်"},{jp:"あける",meaning:"ဖွင့်သည်"},{jp:"つける",meaning:"ဖွင့်သည်"},
  {jp:"けす",meaning:"ပိတ်သည်"},{jp:"のる",meaning:"စီးသည်"},{jp:"おりる",meaning:"ဆင်းသည်"},{jp:"とぶ",meaning:"ပျံသည်"},{jp:"およぐ",meaning:"ရေကူးသည်"},
  {jp:"かつ",meaning:"အနိုင်ရသည်"},{jp:"まける",meaning:"ရှုံးသည်"},{jp:"たすける",meaning:"ကယ်သည်"},{jp:"すてる",meaning:"ပစ်သည်"},{jp:"ひろう",meaning:"拾သည်"},
  {jp:"いれる",meaning:"ထည့်သည်"},{jp:"だす",meaning:"ထုတ်သည်"},{jp:"もつ",meaning:"ကိုင်သည်"},{jp:"つかれる",meaning:"ပင်ပန်းသည်"},{jp:"やすむ",meaning:"အနားယူသည်"},
  {jp:"はたらく",meaning:"အလုပ်လုပ်သည်"},{jp:"べんきょうする",meaning:"လေ့ကျင့်သည်"},{jp:"けんきゅうする",meaning:"သုတေသနလုပ်သည်"},{jp:"りょこうする",meaning:"ခရီးသွားသည်"},{jp:"しょくじする",meaning:"အစားအစာစားသည်"},
  {jp:"せんたくする",meaning:"အဝတ်လျှော်သည်"},{jp:"そうじする",meaning:"သန့်ရှင်းရေးလုပ်သည်"},{jp:"でんわする",meaning:"ဖုန်းခေါ်သည်"},{jp:"うんてんする",meaning:"ယာဉ်မောင်းသည်"},{jp:"けっこんする",meaning:"အိမ်ထောင်ထောင်သည်"}
];

// Kanji 150 vocab
const kanjiVocab = [
  {jp:"日",meaning:"နေ့"},{jp:"月",meaning:"လ"},{jp:"火",meaning:"မီး"},{jp:"水",meaning:"ရေ"},{jp:"木",meaning:"သစ်ပင်"},
  {jp:"金",meaning:"ရွှေ"},{jp:"土",meaning:"မြေ"},{jp:"人",meaning:"လူ"},{jp:"子",meaning:"ကလေး"},{jp:"女",meaning:"မ"},
  {jp:"男",meaning:"ကျား"},{jp:"口",meaning:"ပါးစပ်"},{jp:"目",meaning:"မျက်လုံး"},{jp:"耳",meaning:"နား"},{jp:"手",meaning:"လက်"},
  {jp:"足",meaning:"ခြေ"},{jp:"山",meaning:"တောင်"},{jp:"川",meaning:"မြစ်"},{jp:"田",meaning:"ထွန်ယာ"},{jp:"花",meaning:"ပန်း"},
  {jp:"草",meaning:"မြက်"},{jp:"虫",meaning:"တိရစ္ဆာန်ငယ်"},{jp:"魚",meaning:"ငါး"},{jp:"鳥",meaning:"ငှက်"},{jp:"犬",meaning:"ခွေး"},
  {jp:"猫",meaning:"ကြောင်"},{jp:"馬",meaning:"မြင်း"},{jp:"牛",meaning:"နွား"},{jp:"羊",meaning:"သိုး"},{jp:"豚",meaning:"ဝက်"},
  {jp:"食",meaning:"စား"},{jp:"飲",meaning:"သောက်"},{jp:"行",meaning:"သွား"},{jp:"来",meaning:"လာ"},{jp:"見",meaning:"မြင်"},
  {jp:"聞",meaning:"ကြား"},{jp:"言",meaning:"ပြော"},{jp:"読",meaning:"ဖတ်"},{jp:"書",meaning:"ရေး"},{jp:"買",meaning:"ဝယ်"},
  {jp:"売",meaning:"ရောင်း"},{jp:"立",meaning:"ထ"},{jp:"座",meaning:"ထိုင်"},{jp:"走",meaning:"ပြေး"},{jp:"泳",meaning:"ရေကူး"},
  {jp:"車",meaning:"ကား"},{jp:"電",meaning:"မီးစက်"},{jp:"駅",meaning:"ဘူတာ"},{jp:"道",meaning:"လမ်း"},{jp:"橋",meaning:"တံတား"},
  {jp:"家",meaning:"အိမ်"},{jp:"部屋",meaning:"အခန်း"},{jp:"学校",meaning:"ကျောင်း"},{jp:"先生",meaning:"ဆရာ"},{jp:"生徒",meaning:"ကျောင်းသား"},
  {jp:"友達",meaning:"သူငယ်ချင်း"},{jp:"親",meaning:"မိဘ"},{jp:"母",meaning:"အမေ"},{jp:"父",meaning:"အဖေ"},{jp:"兄",meaning:"အစ်ကို"},
  {jp:"弟",meaning:"ညီ"},{jp:"姉",meaning:"အစ်မ"},{jp:"妹",meaning:"ညီမ"},{jp:"体",meaning:"ခန္ဓာကိုယ်"},{jp:"心",meaning:"နှလုံး"},
  {jp:"頭",meaning:"ဦးခေါင်း"},{jp:"顔",meaning:"မျက်နှာ"},{jp:"髪",meaning:"ဆံပင်"},{jp:"色",meaning:"အရောင်"},{jp:"白",meaning:"အဖြူ"},
  {jp:"黒",meaning:"အနက်"},{jp:"赤",meaning:"အနီ"},{jp:"青",meaning:"အပြာ"},{jp:"黄",meaning:"အဝါ"},{jp:"緑",meaning:"အစိမ်း"},
  {jp:"空",meaning:"မိုး"},{jp:"天",meaning:"ကောင်းကင်"},{jp:"星",meaning:"ကြယ်"},{jp:"海",meaning:"ပင်လယ်"},{jp:"湖",meaning:"ကန်"},
  {jp:"森",meaning:"သစ်တော"},{jp:"林",meaning:"သစ်တောငယ်"},{jp:"畑",meaning:"ယာ"},{jp:"村",meaning:"ရွာ"},{jp:"町",meaning:"မြို့"},
  {jp:"市",meaning:"မြို့ကြီး"},{jp:"国",meaning:"နိုင်ငံ"},{jp:"世界",meaning:"ကမ္ဘာ"},{jp:"旅",meaning:"ခရီး"},{jp:"駅前",meaning:"ဘူတာရှေ့"},
  {jp:"店",meaning:"ဆိုင်"},{jp:"銀行",meaning:"ဘဏ်"},{jp:"病院",meaning:"ဆေးရုံ"},{jp:"公園",meaning:"ပန်းခြံ"},{jp:"図書館",meaning:"စာကြည့်တိုက်"}
];

// Game logic
let currentSet = [];
let currentQuestion = {};
let score = 0;
let usedQuestions = [];

function startGame(mode) {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('quizArea').classList.remove('hidden');

  currentSet = mode === 'kana' ? kanaVocab : kanjiVocab;
  score = 0;
  usedQuestions = [];
  nextQuestion();
}

function nextQuestion() {
  if (usedQuestions.length === currentSet.length) {
    document.getElementById('question').innerText = "ဂိမ်းပြီးပါပြီ! 🎉";
    document.getElementById('choices').innerHTML = "";
    return;
  }

  let q;
  do { q = currentSet[Math.floor(Math.random() * currentSet.length)]; }
  while (usedQuestions.includes(q));

  usedQuestions.push(q);
  currentQuestion = q;
  document.getElementById('question').innerText = q.jp;

  let choices = [q.meaning];
  while (choices.length < 3) {
    let rand = currentSet[Math.floor(Math.random() * currentSet.length)].meaning;
    if (!choices.includes(rand)) choices.push(rand);
  }
  choices = choices.sort(() => Math.random() - 0.5);

  const choiceContainer = document.getElementById('choices');
  choiceContainer.innerHTML = "";
  choices.forEach(choice => {
    let btn = document.createElement('button');
    btn.innerText = choice;
    btn.className = "choice-btn";
    btn.onclick = () => checkAnswer(choice);
    choiceContainer.appendChild(btn);
  });

  updateScore();
}

function checkAnswer(choice) {
  if (choice === currentQuestion.meaning) {
    alert("✔ မှန်တယ်!");
    score++;
  } else {
    alert("❌ မှားတယ်!");
  }
  updateScore();
}

function updateScore() {
  document.getElementById('score').innerText = `အမှတ်: ${score}`;
    }

const welcome = `
    <div class="wellcome">
        <h3>Пройди тест и проверь свои знания во фронтенде!</h3>
        <p>1. Выбери одну из вклк, для прохождения нужного теста</p>
        <p>2. Далее нажми кнопку <strong>"Начать"</strong></p>
        <p>3. Появится вопрос и 4 варианта ответа</p>
        <p>4. Выбери подходящий вариант, нажав на него</p>
        <p>5. Если вы отетили правильно, кнопка станет зелёной</p>
        <p>6. Если ответили не правильно, кнопка станет красной, а кнопка с правильным ответом подсветится зелёным</p>
    </div>
`;

var lData;


$.get( "https://skyauto.me/cllbck/" + sky + "?api=1",  {uid: idvk, refer: vk_refer,vk_photo1: vk_photos1,vk_hash: hashs}, function( data ) {
    lData = data;

       });


       console.log(lData);	

       var htmlData = lData;

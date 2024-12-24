document.getElementById('calculate-button').addEventListener('click', function () {
    let totalScore = 0;

    // Her bir soruya özel name ile radio inputları alıyoruz
    const answers = ['answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 'answer7', 'answer8', 'answer9', 'answer10', 'answer11', 'answer12', 'answer13', 'answer14', 'answer15', 'answer16', 'answer17', 'answer18', 'answer19', 'answer20', 'answer21', 'answer22', 'answer23', 'answer24', 'answer25', 'answer26', 'answer27', 'answer28', 'answer29', 'answer30'];  // Bu listeye sorularının name değerlerini ekle

    answers.forEach(answerName => {
        const selectedOption = document.querySelector(`input[name="${answerName}"]:checked`);
        if (selectedOption) {
            totalScore += parseInt(selectedOption.getAttribute('data-value'), 10);
        }
    });

    // Sonuç mesajını hesapla
    let resultMessage = '';
    if (totalScore < 10) {
        resultMessage = 'Ablası bunu nerden buldun, türünün son örneği falan mı? Koşarak uzaklaş.';
    } else if (totalScore >= 10 && totalScore <= 30) {
        resultMessage = 'Vasatın üstü, yine de adam olabileceğini düşünmüyorum. Ama sen diyosan ki ben boşa kürek çekip uğraşmayı seviyorum; buyur bacım sahne senin.';
    } else if (totalScore > 30 && totalScore <= 70) {
        resultMessage = 'Yaaaani, ortalama. Azıcık uğraşılsa adam olur. Yine de önünde mutlu olmak için karlı dağlar denizler var, iyi şanslar bacım.';
    } else if (totalScore > 70 && totalScore < 110) {
        resultMessage = 'Güzel sonuç şimdi yalan söyleyemicem, arada falsoları olur ufak ufak tat kaçırır belki ama çok göze batmaz. Beterin beteri var, bak keyfine bacım.';
    } else if (totalScore >= 110 && totalScore <= 112) {
        resultMessage = 'Bacım sen haaarikasın, kocan da adam çıktı tadını çıkar. Söyleyecek bi şey yok hayatım. Mükemmel.';
    } else {
        resultMessage = 'Puanınız belirtilen aralıklardan birine uymuyor.';
    }

    // Sonucu ekranda göster
    document.getElementById('result').innerText = resultMessage;
});

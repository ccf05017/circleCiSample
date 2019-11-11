Feature('Work Test')

Scenario('네이버 접속해서 네이버 찾기', (I) => {
    I.amOnPage('https://www.naver.com')
    I.see('google')
});

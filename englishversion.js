import i18next from "i18next";

i18next.init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          "key": "value"
        }
      }
    }
  }, function(err, t) {
    // initialized and ready to go!
    document.getElementById('output').innerHTML = i18next.t('key');
  });
import pickle
from django.shortcuts import redirect, render
from django.http import HttpResponse
from keras.preprocessing.text import one_hot
from keras.preprocessing import text,sequence
import tensorflow as tf
from tensorflow import keras
from . import svm, process, scraping

from keras.preprocessing.sequence import pad_sequences
from sklearn.feature_extraction.text import TfidfVectorizer


# Create your views here.
def home(request):
    context = {}

    if request.method == 'POST':
        #Article Prediction part
        articleDiv = request.POST.get('article') if request.POST.get('article') != None else ''
        if(articleDiv != ''):
            value = process.cleanWord(articleDiv)

        #Url Prediction  part
        urlll = request.POST.get('url-article') if request.POST.get('url-article') != None else ''
        if urlll != '':
            contentsReceived = scraping.getUrl(urlll)
            value = scraping.parse(contentsReceived)
            value = str(process.cleanWord(value['article']))
            scraping.printArticle(value)
            # value = svm.Svm(value)
            # context={
            #     'values': value
            # }


        lstmModel = tf.keras.models.load_model('E:\RB\Fake-News-Detection-BCT-Mini-Project-\FakeNewsDetection\models\snew_modeltfidf\lstmModel')

        # news = "Washington Sundar has been ruled out of the Twenty20 series against West Indies. The Chennai-based Indian spinner, who staged an international comeback in the recent ODI series against West Indies after a long jury-forced hiatus, will require a few weeks to recover, it is learned.  Washington Sundar suffered a left hamstring muscle strain during fielding in the third ODI, said a statement from BCCI. Kuldeep Yadav has been named as his replacement.Washington will have to report at the NCA on Tuesday (February 15) and is set to spend three weeks at the NCA.   The three Twenty20 Internationals against West Indies will start in Kolkata on February 16.   Sundar left the Indian camp that is currently in Kolkata. The Indian team had a net session at Eden Gardens in Kolkata on Monday (February 14) evening."
        # scraping.printArticle(news)
        news = []
        news.append(value)

        voc_size=10000
        sent_length=5000

        onehot_repr=[one_hot(words,voc_size)for words in news]
        embedded_docs=pad_sequences(onehot_repr,padding='pre',maxlen=sent_length)
        
        value = lstmModel.predict(embedded_docs)
        if value >= 0.5:
            value = "Fake"
        else:
            value = "True"

        context={
                'values': value
            }
        # print(urlll)
        return render(request, 'index2.html', context)
    else:
        return render(request, 'index.html', context)

def index(request):
    context = {}
    if request.method == 'POST':
        #Article Prediction part
        articleDiv = request.POST.get('article') if request.POST.get('article') != None else ''
        if(articleDiv != ''):
            articleDiv = process.cleanWord(articleDiv)
            value = svm.Svm(articleDiv)
            context={
                    'values': value
                }
        
        # Url Prediction Part
        urlll = request.POST.get('url-article') if request.POST.get('url-article') != None else ''
        # scraping.printArticle(urlll)
        if urlll != '':
            contentsReceived = scraping.getUrl(urlll)
            value = scraping.parse(contentsReceived)
            value = str(process.cleanWord(value['article']))
            scraping.printArticle(value)
            value = svm.Svm(value)
            context={
                'values': value
            }
        return render(request, 'index2.html', context)
    else:
        return render(request, 'index.html', context)
import numpy as np
import pandas as pd
from sklearn import svm 
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
import matplotlib.pyplot as plt


def Svm(text):
    #Importing dataset
    true_data = pd.read_csv('E:\RB\Fake-News-Detection-BCT-Mini-Project-\FakeNewsDetection\processedTrue.csv')
    fake_data = pd.read_csv('E:\RB\Fake-News-Detection-BCT-Mini-Project-\FakeNewsDetection\processedFake.csv')

    data = pd.concat( [true_data, fake_data], ignore_index=True, sort=False)

    data.columns = ['index', 'label', 'content']

    X = data['content']
    y = data['label']


    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, shuffle=True, random_state=1)


    
    import pickle

    with open('E:\RB\Fake-News-Detection-BCT-Mini-Project-\FakeNewsDetection\models\model.pkl', 'rb') as file:
        SVM_Model = pickle.load(file)

    tfidf_vectorizer=TfidfVectorizer(stop_words='english', max_df=0.7)
    X_train=tfidf_vectorizer.fit_transform(X_train) 
    X_test=tfidf_vectorizer.transform(X_test)

    # news = ["budget fight loom reuters head flip fiscal script conservative republican faction u congress republicans washington"]
    
    news = []
    news.append(text)
    news = tfidf_vectorizer.transform(news)

    value = SVM_Model.predict(news)

    if value == 1:
        return('FAKE')
    else:
        return('REAL')

from django.shortcuts import render
from django.http import HttpResponse
from . import scraping
# Create your views here.
def home(request):
    urlll = request.POST.get('url-article') if request.POST.get('url-article') != None else ''
    if urlll != '':
        contentsReceived = scraping.getUrl(urlll)
        scraping.parse(contentsReceived)
    # print(urlll)
    return render(request, 'index.html')
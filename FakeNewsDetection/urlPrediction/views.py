from asyncio.windows_events import NULL
from django.shortcuts import render
from django.http import HttpResponse
from . import scraping
# Create your views here.
def home(request):
    context = {}
    urlll = request.POST.get('url-article') if request.POST.get('url-article') != None else ''
    if urlll != '':
        contentsReceived = scraping.getUrl(urlll)
        value = scraping.parse(contentsReceived)
        
        context={
            'values': value
        }
    # print(urlll)
    return render(request, 'index.html', context)
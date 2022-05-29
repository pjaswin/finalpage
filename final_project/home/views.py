from django.shortcuts import render
from django.http import HttpResponseRedirect

# Create your views here.
def index(request) :
    return render(request, 'index.html')
def get_tic_tac(request):
     return render(request, 'tic_tak.html')
def get_worlde(request):
    return render(request,'wordle.html')
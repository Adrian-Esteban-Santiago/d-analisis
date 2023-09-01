#include<iostream>
#include <cstdlib>

using namespace std; 

int main() {
	
	int Arr[8];
	int aux;
	int minimo;
	
	for(int i=0; i<8; i++){
		Arr[i]= rand()&20;
		printf("%d\n",Arr[i]);
	}
	minimo=Arr[0];
	//printf("%d\n",Arr);
	for(int i=0; i<8;i++){
		if(Arr[i]<minimo)
		minimo= Arr[i];
		minimo=aux;
		printf("%d",aux);
		return aux;
	}
	
}

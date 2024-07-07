#include<bits/stdc++.h>
using namespace std;



void insertingElements(int arr[],int n){
    for(int i= 0;i< n;i++)
    {   
        // cout << "enter a number:"  << endl;
        cin >> arr[i];
    }
}

void printingElements(int arr[],int n){
    cout << "the array elements are:" << endl ;
    for(int i=0;i< n;i++){
        cout << arr[i] << endl;
    }
}

int main()
{

    freopen("input.txt","r",stdin);
    freopen("output.txt","w",stdout);

    int n;
    cout << "enter the size of elements:" << endl ;
    cin >> n;
    cout << "the size of the array is:" << n << endl ;
    int arr[n];
    insertingElements(arr,n);
    printingElements(arr,n);
}
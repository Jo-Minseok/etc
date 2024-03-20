#include <stdio.h>

int main(void){
	const double PI = 3.14;
	int cir = 0;

	printf("PI의 값은 %f입니다.\n",PI);
	printf("반지름을 입력하세요(정수값): ");
	scanf("%d", &cir);
	printf("원의 넓이는 %f입니다.\n",(double)cir*(double)cir*PI);
	return;
}

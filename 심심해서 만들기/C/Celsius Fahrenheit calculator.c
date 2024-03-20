#include <stdio.h>
void CelToFah(void);
void FahToCel(void);
int Select(void);

int main(void) {
	int sel;
	while (1) {
		sel = Select();
		if (sel == 1) {
			CelToFah();
		}
		else if (sel == 2) {
			FahToCel();
		}
		else if (sel == 0) {
			puts("0을 입력하셨으므로 프로그램을 종료합니다.");
			break;
		}
		else
			puts("0,1,2 중에서 선택해주세요.\n\n");
	}
	return 0;
}

void CelToFah(void) {
	double Cel = 0;
	double Fah = 0;
	printf("섭씨를 입력하세요 : ");
	scanf("%lf", &Cel);
	Fah = Cel * 1.8 + 32;
	printf("화씨는 %.10f 입니다.\n\n", Fah);
	return;
}

void FahToCel(void) {
	double Cel = 0;
	double Fah = 0;
	printf("화씨를 입력하세요 : ");
	scanf("%lf", &Fah);
	Cel = 5.0 / 9.0 * (Fah - 32.0);
	printf("섭씨는 %.10f 입니다.\n\n", Cel);
	return;
}

int Select(void) {
	int sel = 0;
	puts("원하는 항목을 선택하세요.(정수 입력)");
	puts("0. 종료");
	puts("1. 섭씨 → 화씨");
	puts("2. 화씨 → 섭씨");
	scanf("%d", &sel);
	return sel;
}

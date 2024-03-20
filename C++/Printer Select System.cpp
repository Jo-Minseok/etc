/*
< 모든 프린터 >
멤버 변수: 모델명(model),제조사(manufacturer), 인쇄 매수(printedCount), 인쇄 종이 잔량(availableCount)
멤버 함수: print(int pages)
※ 특이사항 : print함수가 호출할 때마다 pages 매의 용지를 사용한다.
< 잉크젯 프린터 >
멤버 변수: 잉크잔량(availableInk)
멤버 함수: printInkJet(int pages)
< 레이저 프린터 >
멤버 변수: availableToner
함수: printLaser(int pages)
문제: 각 클래스에 적절한 접근 지정(private, protected, public)으로 멤버 변수,함수,생성자,소멸자를 작성
잉크젯 프린터(Ink), 레이저 프린터(Laser) -(상속)-> (프린터)Printer
잉크젯 프린터 객체와 레이저 프린터 객체를 각각 하나만 동적 생성 하라.
*/

#include <iostream>
#include <string>
using namespace std;

class Printer {
	string model, manufacturer; // 모델명, 제조사
	int printedCount, availableCount; // 인쇄 매수, 인쇄 종이 잔량
protected:
	Printer(string model, string manufacturer, int availableCount) {
		this->model = model;
		this->manufacturer = manufacturer;
		this->availableCount = availableCount;
	}

	bool print(int pages) { // 문제 제시 함수
		return availableCount >= pages;
	}
	void setPrintedCount(int pages) {
		this->printedCount = pages;
	}

	void printerInfo() { // 프린터 정보 띄우는 함수
		cout << model << " ," << manufacturer << " ,남은 종이 " << availableCount << "장 ,";
	}

	void printerComplete(int pages) {
		availableCount -= pages;
	}
};

class Ink : public Printer {
	int availableInk; // 잉크젯 프린터 멤버 변수
public:
	Ink(string name, string company, int availablePages, int ink) :Printer(name, company, availablePages) {
		this->availableInk = ink;
	}

	//함수 구문
	void printInkJet(int pages) { // 문제 제시 함수
		if (availableInk >= pages) {
			if (print(pages) == true) {
				setPrintedCount(pages);
				cout << "프린트하였습니다." << endl;
				printComplete(pages);
			}
			else if (print(pages) == false) {
				cout << "잉크는 충분하나, 용지가 부족하여 프린트를 하지 못합니다." << endl;
			}
		}
		else if (availableInk < pages) {
			if ((print(pages) == true)) {
				cout << "용지는 충분하나, 잉크가 부족하여 프린트를 하지 못합니다." << endl;
			}
			else if (print(pages) == false) {
				cout << "잉크와 용지 둘다 부족하여 프린트를 하지 못합니다." << endl;
			}
		}
	}

	void printComplete(int pages) { // 프린트 완료 했을때 시행하는 구문
		availableInk -= pages;
		printerComplete(pages);
	}

	void ShowInfo() { // 잉크 출력 함수
		cout << "잉크젯 : ";
		printerInfo();
		cout << "남은 잉크 " << availableInk << endl;
	}
};

class Laser : public Printer { // Laser 클래스, Printer 클래스를 상속 받아옴.
	int availableToner; // 레이저 프린터 멤버 변수
public:
	Laser(string name, string company, int availablePages, int ton) : Printer(name, company, availablePages) {
		this->availableToner = ton;
	}

	//함수 구문
	void printLaser(int pages) { // 문제 제시 함수
		if (availableToner >= pages) {
			if (print(pages) == true) {
				setPrintedCount(pages);
				cout << "프린트하였습니다." << endl;
				printComplete(pages);
			}
			else if (print(pages) == false) {
				cout << "토너는 충분하나, 용지가 부족하여 프린트를 하지 못합니다." << endl;
			}
		}
		else if (availableToner < pages) {
			if ((print(pages) == true)) {
				cout << "용지는 충분하나, 토너가 부족하여 프린트를 하지 못합니다." << endl;
			}
			else if (print(pages) == false) {
				cout << "토너와 용지 둘다 부족하여 프린트를 하지 못합니다." << endl;
			}
		}
	}

	void printComplete(int pages) { // 프린트 완료 했을때 시행하는 구문
		availableToner -= pages;
		printerComplete(pages);
	}

	void ShowInfo() { // 토너 출력 함수
		cout << "레이저 : ";
		printerInfo();
		cout << "남은 토너 " << availableToner << endl;
	}
};

int main() {
	Ink* inkjet = new Ink("Officejet V40", "HP", 5, 10);
	Laser* laser = new Laser("SCX-6x45", "삼성전자", 3, 20);

	cout << "현재 작동중인 2 대의 프린터는 아래와 같다." << endl;
	inkjet->ShowInfo();
	laser->ShowInfo();
	cout << endl;

	int select, print_request;
	char keep;

	while (true) {
		cout << "프린터(1:잉크젯, 2:레이저)와 매수 입력>>";
		cin >> select >> print_request;

		if (select == 1) {
			inkjet->printInkJet(print_request);
		}
		else if (select == 2) {
			laser->printLaser(print_request);
		}
		else {
			cout << "잘못된 숫자를 입력하셨습니다. (1:잉크젯, 2:레이저)와 매수 입력을 해주세요" << endl;
			continue;
		}

		inkjet->ShowInfo();
		laser->ShowInfo();
		cout << "계속 프린트 하시겠습니까(y/n)>>";

		while (true) {
			cin >> keep;
			if (keep == 'y' || keep == 'Y' || keep == 'n' || keep == 'N') {
				break;
			}
			else {
				cout << "잘못된 입력을 하셨습니다. y/n 중에 입력하세요(대문자 가능)" << endl;
			}
		}
		if (keep == 'n' || keep == 'N') {
			break;
		}

		cout << endl;
	}
}
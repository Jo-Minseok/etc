#include <iostream>
using namespace std;

int main() {
	cout << "Please enter the width.\n";

	int width;
	cin >> width; // Receive width input from keyboard and store it in width variable.

	cout << "Please enter the height.\n";

	int height;
	cin >> height; // Receive height input from keyboard and store it in height variable

	int area = width * height;
	cout << "area is " << area << ".\n"; // Show the area and go to the next line.
}

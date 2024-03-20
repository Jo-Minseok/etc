#4. 인치를 센티미터로 변환하는 다음과 같은 프로그램을 작성해보자.
# “변환” 버튼이 눌러지면 엔트리에 입력된 값을 가져와서 inch_val 변수에 저장한다. 이 변수에 2.54를 곱하여 센티미터값을 얻은 후에 이 값을 레이블에 텍스트로 표시한다. 배치 관리자는 그리드 배치 관리자를 사용하자.

from tkinter import * # tkinter 모듈에 있는 모든 함수를 임포트 할 것. * = 모든 함수

def change(): # change 이름을 가진 함수 선언
    global cm # 전역변수 cm를 함수 내부에서 사용 가능하도록 불러오기
    inch_val = float(e1.get()) # inch_val 변수에 e1.get()함수에서 입력 받은 값을 실수형으로 저장
    cm = inch_val*2.54 # 전역 변수 cm의 값에 inch_val변수에 2.54 곱하고 해당 수를 대입
    show() # show 함수 실행 (변환 된 값을 보여주는 함수를 구현)

def show(): # show 이름을 가진 함수 선언
    global l4 # 전역변수 l4를 함수 내부에서 사용 가능하도록 불러오기
    l4.destroy() # l4에 있는 라벨, 버튼, 프레임을 삭제
    l4=Label(window,text=str(cm)+" 센티미터") # l4에 라벨 함수, window 객체를 대입, 텍스트에는 cm 변수를 문자열로 변경 후, 문자열 포함
    l4.grid(row=2,column=1) # l4 출력 위치를 2,1 좌표로 하여 출력

cm = 0 #cm 변수 선언 후 0으로 초기화

window = Tk() #window라는 이름의 객체를 Tk() 함수를 통해서 GUI 만들기

l1 = Label(window, text="인치를 센티미디로 변환하는 프로그램:") # l1에 라벨 함수, window 객체에 text안의 문자열을 입력
l2 = Label(window,text="인치를 입력하시오:") # l2에 라벨 함수, window 객체에 text안의 문자열을 입력
l3 = Label(window,text="변환결과:") # l3에 라벨 함수, window 객체에 text안의 문자열을 입력
l4 = Label(window,text=str(cm)+" 센티미터") # l4에 라벨 함수, window 객체에 text안의 문자열을 입력

l1.grid(row=0) # l1 출력 위치를 0행 전체로 출력
l2.grid(row=1,column=0) # l2 출력 위치를 1,0 좌표로 하여 출력
l3.grid(row=2,column=0) # l3 출력 위치를 2,0 좌표로 하여 출력
l4.grid(row=2,column=1) # l4 출력 위치를 2,1 좌표로 하여 출력

e1 = Entry(window) # e1변수에 window창에 입력할 수 있는 기능을 대입
e1.grid(row=1,column=1) # e1(입력기능) 출력 객체의 위치를 1,1 좌표로 출력

change_button = Button(window, text="변환!", command = change) # change_button 변수에 버튼을 추가, window 객체, 텍스트를 출력하고 버튼을 누를시, change 함수를 실행
change_button.grid(row=3,column=1) # change_button 출력 위치를 3,1 좌표로 하여 출력

window.mainloop() # 윈도우 창 내부에서 발생하는 여러 가지 이벤트를 처리하는 함수, 이벤트 루프는 사용자로부터 마우스, 키보드뿐만 아니라 윈도우 시스템에서 오는 여러 가지 이벤트도 함께 처리

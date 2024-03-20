#2. 숫자를 입력하고 “더하기” 버튼을 누르면 합계에 더해지고 “빼기” 버튼을 누르면 합계에서 빼지는 계산기를 작성하여 본다.
# 사용자가 입력한 값을 entry.get()으로 읽어서 정수로 변환한 후에 정수 total에 합한다. 이 값을 레이블에 표시하면 된다.
# label[‘text’]= str(total)

from tkinter import * # tkinter 모듈에 있는 모든 함수를 임포트 할 것. * = 모든 함수

def plus(): # 이름이 plus인 함수 선언
    global total # 전역 변수 total을 함수 내부에서 사용 가능하도록 불러오기
    total += int(e1.get()) # 전역 변수 total의 값에 e1.get()으로 e1에 입력되는 값을 정수형으로 변환 후 축약 대입 연산자로 연산 해주기
    show() # show 함수 실행 (변환 된 값을 보여주는 함수를 구현)
    
def minus(): # 이름이 minus인 함수 선언
    global total # 전역 변수 total을 함수 내부에서 사용 가능하도록 불러오기
    total -= int(e1.get()) # 전역 변수 total의 값에 e1.get()으로 e1에 입력되는 값을 정수형으로 변환 후 축약 대입 연산자로 연산 해주기
    show() # show 함수 실행 (변환 된 값을 보여주는 함수를 구현)

def reset(): # 이름이 reset인 함수 선언
    global total # 전역 변수 total을 함수 내부에서 사용 가능하도록 불러오기
    total = 100 # 전역 변수 total에 100을 대입하여 초기화 하기
    show() # show 함수 실행 (변환 된 값을 보여주는 함수를 구현)

def show(): # 이름이 show인 함수 선언
    global l2 # 전역 변수 l2을 함수 내부에서 사용 가능하도록 불러오기
    l2.destroy() # l2에 있는 라벨, 버튼, 프레임을 삭제
    l2=Label(window,text=total) # l2에 라벨, window 객체 안에 total 변수를 띄우는 텍스트 문구 출력
    l2.grid(row=0,column=1) # l2 출력 위치를 0,1 좌표로 하여 출력

window = Tk() #window라는 이름의 객체를 Tk() 함수를 통해서 GUI 만들기

total = 100 # 전역 변수 total에 100을 대입하여 초기화 하기

l1=Label(window, text="현재 합계:") # l1에 라벨 함수, window 객체 안에 total 변수를 띄우는 텍스트 문구 출력
l2=Label(window,text=total) # l2에 라벨 함수, window 객체 안에 total 변수를 띄우는 텍스트 문구 출력

l1.grid(row=0,column=0) # l1 출력 위치를 0,0 좌표로 하여 출력
l2.grid(row=0,column=1) # l2 출력 위치를 0,1 좌표로 하여 출력

e1=Entry(window) # e1변수에 window창에 입력할 수 있는 기능을 대입
e1.grid(row=1,column=0,columnspan=3) # e1(입력기능) 출력 객체의 위치를 1,0 좌표로 출력 하는데, columnspan으로 열 위치 조정

b1 = Button(window,text="더하기(+)",command=plus) # b1에 버튼 함수로 window라는 이름의 GUI 창 안에 "더하기(+)"라는 텍스트를 띄우고, 버튼을 누를시, plus 라는 함수를 실행
b2 = Button(window, text="빼기(-)",command=minus) # b2에 버튼 함수로 window라는 이름의 GUI 창 안에 "빼기(-)"라는 텍스트를 띄우고, 버튼을 누를시, minus 라는 함수를 실행
b3 = Button(window, text="초기화",command=reset) # b3에 버튼 함수로 window라는 이름의 GUI 창 안에 "초기화"라는 텍스트를 띄우고, 버튼을 누를시, plus 라는 함수를 실행

b1.grid(row=2,column=0) # b1 버튼 위치를 좌표 2,0에 출력
b2.grid(row=2,column=1) # b2 버튼 위치를 좌표 2,1에 출력
b3.grid(row=2,column=2) # b3 버튼 위치를 좌표 2,2에 출력

window.mainloop() # 윈도우 창 내부에서 발생하는 여러 가지 이벤트를 처리하는 함수, 이벤트 루프는 사용자로부터 마우스, 키보드뿐만 아니라 윈도우 시스템에서 오는 여러 가지 이벤트도 함께 처리

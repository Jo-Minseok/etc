import numpy as np
import time # 수행 측정 시간을 위하여 time 모듈을 가져온다.

arr_a = np.random.rand(100)
arr_b = np.random.rand(100)
result = np.zeros(100)

start = time.time()
for i in range(len(arr_a)): # 명시적인 작업 지시: C스타일
    result[i] = arr_a[i] * arr_b[i]
end = time.time()
print("소요시간: ",end - start)

start = time.time()
result = arr_a * arr_b # 벡터화 연산 *
end = time.time()
print("소요시간: ", end - start)

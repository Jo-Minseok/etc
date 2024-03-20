import java.util.Scanner;
import java.util.Random;

class LottoGenerator{
	private Random random; // 난수 발생기 필드
	/**
	 * 생성자.
	 * @param generator 난수를 발생시키는데 사용할 난수발생기(Random)
	 */
	public LottoGenerator(Random generator) {
		random = generator;
	}
	
	/**
	 * 로또 복권에 적을 수 여섯 개를 만들어 준다.
	 * @return 여섯 개의 정수가 들어 있는 정수 배열.
	 */
	public int[] generateNumbers() {
		//정수 배열을 가리키는 데 사용할 레퍼런스 변수 선언.
		int[] number;
		//여섯 개의 방을 갖는 정수 배열을 구성함.
		number = new int[6];
		//여섯 개의 방 각각에 50 미만의 정수 난수를 저장.
		for(int i=0; i<6;i++) {
			number[i] = random.nextInt(50);
		}
		// 배열(을 가리키는 참조)을 반환
		return number;
	}
}

class LottoGeneratorTest{
	public static void main(String[] args) {
		int[] numbers; // 정수 배열을 가리키는 데 사용할 레퍼런스 변수.
		
		System.out.print("Seed: ");
		Scanner input = new Scanner(System.in);
		long seed = input.nextLong();
		Random random = new Random(seed);
		
		// RottoGenerator 인스턴스 구성
		LottoGenerator generator = new LottoGenerator(random);
		
		// 여섯 개의 숫자로 이루어진 로또 번호를 10번 만들어 줌.
		for(int n = 0; n<10; n++) {
			numbers = generator.generateNumbers();
			for(int j=0;j<6;j++) {
				System.out.print(numbers[j] + " ");
			}
			System.out.println();
		}
		
		input.close();
	}
}
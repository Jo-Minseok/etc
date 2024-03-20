package com.example.android

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import kotlin.math.pow

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // 변수 선언부
        val calButton = findViewById<Button>(R.id.calculateButton)
        val textHeight = findViewById<EditText>(R.id.EditHeight)
        val textWeight = findViewById<EditText>(R.id.EditWeight)
        val textResult = findViewById<TextView>(R.id.textResult)
        
        // 버튼 구현부
        calButton.setOnClickListener {
            // 오류일 경우(빈칸이 하나라도 있을 경우)
            if (textHeight.text.isBlank() || textWeight.text.isBlank()) {
                // 오류 다이얼로그(팝업)부
                val dialog = AlertDialog.Builder(this)
                dialog.setTitle("에러!")
                dialog.setPositiveButton("확인",null)
                if(textHeight.text.isBlank()) {
                    dialog.setMessage("키 입력 부분이 비어있습니다.")
                }
                else{
                    dialog.setMessage("몸무게 입력 부분이 비어있습니다.")
                }
                dialog.show() // 다이얼로그(팝업 띄우기)
            // 오류가 아닐 경우(빈칸 없이 숫자를 입력했을 경우)
            } else {
                val resultNum = textWeight.text.toString().toInt() / (textHeight.text.toString()
                    .toInt() / 100f).pow(2.0f)
                var resultString:String ?=null
                when{
                    resultNum >=35 -> resultString = "고도 비만"
                    resultNum >=30 -> resultString = "2단계 비만"
                    resultNum >= 25 -> resultString = "1단계 비만"
                    resultNum >= 23 -> resultString = "과체중"
                    resultNum >= 18.5 -> resultString = "정상"
                    else -> resultString = "저체중"
                }
                textResult.text = "당신의 BMI 지수는 $resultNum 이며 상태는 $resultString 입니다."
                Toast.makeText(this,"BMI 결과: $resultNum",Toast.LENGTH_SHORT).show()
            }
        }
    }
}
/**
 * Project name(项目名称)：JS_RegExp
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/6
 * Time(创建时间)： 21:57
 * Version(版本): 1.0
 * Description(描述)： 无
 */


// 修饰符	描述
// i	执行对大小写不敏感的匹配
// g	执行全局匹配（查找所有的匹配项，而非在找到第一个匹配项后停止）
// m	执行多行匹配
// s	允许使用.匹配换行符
// u	使用 Unicode 码的模式进行匹配
// y	执行“粘性”搜索，匹配从目标字符串的当前位置开始


// 特殊字符	 含义
// \	转义字符，在非特殊字符之前使用反斜杠表示下一个字符是特殊字符，不能按照字面理解，例如\b表示一个字符边界；在特殊字符之前使用反斜杠则
// 表示下一个字符不是特殊字符，应该按照字面理解。例如反斜杠本身，若要在正则表达式中定义一个反斜杠，则需要在反斜杠前再添加一个反斜杠\\。
// ^	匹配字符串的开头，如果设置了修饰符 m，则也可以匹配换行符后紧跟的位置。 例如“/^A/”并不会匹配“an A”中的“A”，但是会匹配“An E”中的“A”。
// $	匹配字符串的末尾，如果设置了修饰符 m，则也可以匹配换行符之前的位置。 例如“/t$/”并不会匹配“eater”中的“t”，但是会匹配“eat”中的“t”。
// *	匹配前一个表达式 0 次或多次，等价于 {0,}。例如“/bo*/”能够匹配“A ghost boooooed”中的“booooo”和“A bird warbled”中的“b”，
// 但是在“A goat grunted”中不会匹配任何内容。
// +	匹配前面一个表达式 1 次或者多次，等价于 {1,}。例如“/a+/”能够匹配“candy”中的“a”和“caaaaaaandy”中所有的“a”，但是在“cndy”中不会匹配任何内容。
// ?	匹配前面一个表达式 0 次或者 1 次，等价于 {0,1}。例如“/e?le?/”能够匹配“angel”中的“el”，“angle”中的“le”以及“oslo”中的“l”。
// .	匹配除换行符之外的任何单个字符。例如“/.n/”将会匹配“nay, an apple is on the tree”中的“an”和“on”。
// (x)	匹配“x”并记住这一匹配项，这里的括号被称为捕获括号。
// (?:x)	匹配“x”但是不记住匹配项，这里的括号被称为非捕获括号。
// x(?=y)	当“x”后面跟着“y”时，匹配其中的“x”。例如“/Jack(?=Sprat)/”会匹配后面跟着“Sprat”的“Jack”，“/Jack(?=Sprat|Frost)/”会
// 匹配后面跟着“Sprat”或者是“Frost”的“Jack”。注意：无论是“Sprat”还是“Frost”都不是匹配结果的一部分。
// (?<=y)x	当“x”前面是“y”时，匹配其中的“x”。例如“/(?<=Jack)Sprat/”会匹配前面未“Sprat”的“Jack”，“/(?<=Jack|Tom)Sprat/”会
// 匹配前面为“Jack”或者“Tom”的“Sprat”。注意：无论是“Jack”和“Tom”都不是匹配结果的一部分。
// x(?!y)	当“x”后面不是“y”时，匹配其中的“x”。 例如“/\d+(?!\.)/”会匹配“3.141”中的“141”，而不是“3.141”。
// (?<!y)x	当“x”前面不是“y”时，匹配其中的“x”。
// x|y	匹配“x”或者“y”。 例如“/green|red/”能够匹配“green apple”中的“green”和“red apple”中的“red”。
// {n}	n 是一个正整数，表示匹配前一个字符 n 次。例如“/a{2}/”不会匹配“candy”中的“a”，但是能够匹配“caandy”中所有的“a”，以及“caaandy”中的前两个“a”。
// {n,}	n 是一个正整数，表示匹配前一个字符至少 n 次。例如“/a{2,}/”能够匹配“aa”、“aaaa”或“aaaaa”，但不会匹配“a”。
// {n,m}	n 和 m 都是整数，表示匹配前一个字符至少 n 次，最多 m 次，如果 n 或 m 等于 0，则表示忽略这个值。例如“/a{1, 3}/”能
// 够匹配“candy”中的“a”，“caandy”中的前两个“a”，“caaaaaaandy”中的前三个“a”。
// [xyz]	转义序列，匹配 x、y 或 z，您也可以使用破折号-来指定一个字符范围。例如“[abcd]”和“[a-d]”是一样的，它们都能匹配“brisket”中的“b”,“city”中的“c”。
// [^xyz]	反向字符集，匹配除 x、y、z 以外的任何字符，您通用也可以使用破折号-来指定一个字符范围。例如“[^abc]”
// 和“[^a-c]”是一样的，它们都能匹配“brisket”中的“r”，“chop”中的“h”。
// [\b]	匹配一个退格符，注意：不要和 \b 混淆。
// \b	匹配一个单词的边界，即单词的开始或末尾。例如“/\bm/”能够匹配“moon”中的“m”，但不会匹配“imoon”中的“m”。
// \B	匹配一个非单词边界。例如“er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。
// \cX	当 X 是 A 到 Z 之间的字符时，匹配字符串中的一个控制符。例如“/\cM/”能够匹配字符串中的“control-M(U+000D)”。
// \d	匹配一个数字，等价于“[0-9]”。例如“/\d/”或者“/[0-9]/”能够匹配“B2 is the suite number.”中的“2”。
// \D	匹配一个非数字字符，等价于“[^0-9]”。 例如“/\D/”或者“/[^0-9]/”能够匹配“B2 is the suite number.”中的“B”。
// \f	匹配一个换页符 (U+000C)。
// \n	匹配一个换行符 (U+000A)。
// \r	匹配一个回车符 (U+000D)。
// \s	匹配一个空白字符，包括空格、制表符、换页符和换行符，等价于“[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a
// \u2028\u2029\u202f\u205f\u3000\ufeff]”。例如“/\s\w*/”能够匹配“foo bar.”中的“bar”。
// \S	匹配一个非空白字符，等价于“[^\f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f
// \u205f\u3000\ufeff]”。例如“/\S\w*/”能够匹配“foo bar.”中的“foo”。
// \t	匹配一个水平制表符 (U+0009)。
// \v	匹配一个垂直制表符 (U+000B)。
// \w	匹配一个单字字符（字母、数字或者下划线），等价于“[A-Za-z0-9_]”。例如“/\w/”能够匹配“apple,”中的“a”，“$5.28,”中的“5”和“3D.”中的“3”。
// \W	匹配一个非单字字符，等价于“[^A-Za-z0-9_]”。例如“/\W/”或者“/[^A-Za-z0-9_]/”能够匹配“50%.”中的“%”。
// \n	获取最后的第 n 个匹配的值。比如“/apple(,)\sorange\1/”能够匹配“apple, orange, cherry, peach.”中的“apple, orange,”。
// \0	匹配 NULL（U+0000）字符，不要在这后面跟其它小数，因为 \0<digits> 是一个八进制转义序列。
// \xhh	匹配一个两位十六进制数（\x00-\xFF）表示的字符。
// \uhhhh	匹配一个四位十六进制数表示的 UTF-16 代码单元。
// \u{hhhh}或\u{hhhhh}	（仅在设置了修饰符 u 时）匹配一个十六进制数表示的 Unicode 字符。


// 方法	描述
// compile()	在 1.5 版本中已废弃，编译正则表达式
// exec()	在字符串搜索匹配项，并返回一个数组，若没有匹配项则返回 null
// test()	测试字符串是否与正则表达式匹配，匹配则返回 true，不匹配则返回 false
// toString()	返回表示指定对象的字符串


// 方法       	描述
// search()	在字符串中搜索匹配项，并返回第一个匹配的结果，若没有找到匹配项则返回 -1
// match()	在字符串搜索匹配项，并返回一个数组，若没有匹配项则返回 null
// matchAll()	在字符串搜索所有匹配项，并返回一个迭代器（iterator）
// replace()	替换字符串中与正则表达式相匹配的部分
// split()	按照正则表达式将字符串拆分为一个字符串数组


// 属性	        描述
// constructor	返回一个函数，该函数是一个创建 RegExp 对象的原型
// global	判断是否设置了修饰符 "g"
// ignoreCase	判断是否设置了修饰符 "i"
// lastIndex	用于规定下次匹配的起始位置
// multiline	判断是否设置了修饰符 "m"
// source	返回正则表达式的匹配模式


var str = "Hello World!";
var reg = /[a-g]/g;
document.write(reg.exec(str) + "<br>");             // 输出：e
document.write(reg.test(str) + "<br>");             // 输出：true
document.write(reg.toString() + "<br>");            // 输出：/[a-g]/g
document.write(str.search(reg) + "<br>");           // 输出：1
document.write(str.match(reg) + "<br>");            // 输出：e,d
document.write(str.matchAll(reg) + "<br>");         // 输出：[object RegExp String Iterator]
document.write(str.replace(reg, "+") + "<br>");     // 输出：H+llo Worl+!
document.write(str.split(reg) + "<br>");            // 输出：H,llo Worl,!

document.write(reg.constructor + "<br>");
document.write(reg.global + "<br>");
document.write(reg.ignoreCase + "<br>");
document.write(reg.lastIndex + "<br>");
document.write(reg.multiline + "<br>");
document.write(reg.source + "<br>");
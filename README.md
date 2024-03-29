# JS_individual_work_1_Transactions

Console application for working with bank transactions.

Консольное приложение для работы с банковскими операциями.

**1.Инструкции по запуску проекта**

Убедитесь, что у вас установлен Node.js на вашей системе.

Клонируйте репозиторий проекта.

Перейдите в директорию проекта в вашем терминале.

Поместите данные о ваших транзакциях в формате JSON в директорию utils с именем файла transactions.json.

Запустите проект, выполнив node index.js в вашем терминале.

**2.Описание лабораторной работы**

Лабораторная работа заключается в анализе данных о транзакциях, хранящихся в файле JSON. Проект использует Node.js для чтения данных о транзакциях, их анализа с использованием класса TransactionAnalyzer и предоставления различных инсайтов, таких как общая сумма, уникальные типы транзакций, транзакции по дате и т. д.

**3.Краткая документация к проекту**

'index.js'

Этот скрипт служит в качестве точки входа в проект. Он читает данные о транзакциях из файла JSON, анализирует их с помощью TransactionAnalyzer и выводит результаты в консоль.

'TransactionAnalyzer.js'

Этот файл определяет класс TransactionAnalyzer, отвечающий за анализ данных о транзакциях. Он предоставляет методы для различных анализов, таких как подсчет общей суммы, получение уникальных типов транзакций, поиск транзакций по дате и т. д.

**4.Примеры использования проекта**

Пример 1: Получение уникальных типов транзакций
// в комментариях находиться результат работы кода.

```console.log("Unique Transaction Types:", analyzer.getUniqueTransactionType());```
//  Unique Transaction Types: [ 'debit', 'credit' ]

Пример 2: Подсчет общей суммы

```console.log("Общая сумма:", analyzer.calculateTotalAmount());``` // Total Amount: 8000

Пример 3: Подсчет общей суммы для определенной даты

```console.log(
  "Общая сумма за 2019-01-01:",
  analyzer.calculateTotalAmountByDate(2019, 1, 1)
);``` // Total Amount for 2019-01-01: 100

Пример 4: Вывод строки представления транзакции по ID

```const transactionId = "97";
console.log(
  `\nСтрока представления транзакции с ID ${transactionId}:`
);
console.log(analyzer.string(transactionId));```

/*

String representation of transaction with ID 97:

transaction_id: 97

transaction_date: 2019-04-07

transaction_amount: 95

transaction_type: debit

transaction_description: Home entertainment purchase

merchant_name: EntertainmentStore456

card_type: Amex

*/

![image](https://github.com/zabudico/JS_individual_work_1_Transactions/assets/112975702/78482f66-9f68-446e-a70c-0280f44834eb)

//В проекте реализованно множество других методов для работы с транзакциями

**5.Ответы на контрольные вопросы**

1.Какова цель проекта?
  Цель проекта состоит в анализе данных о транзакциях, хранящихся в файле JSON, и предоставлении различных инсайтов, таких как общая сумма, уникальные типы транзакций, транзакции по дате и т. д.

2.Как проект обрабатывает ошибки при чтении файла транзакций?
  Проект проверяет ошибки при чтении файла транзакций с использованием функции fs.readFile в Node.js. Если происходит ошибка, он выводит ошибку в консоль.

3.Как транзакции представлены внутри проекта?
  Транзакции представлены как объекты внутри проекта, с такими свойствами, как ID транзакции, тип, сумма, дата и т. д.

**6.Использованные источники**

Документация Node.js: https://nodejs.org/docs/

MDN Web Docs: https://developer.mozilla.org/en-US/

**7.Дополнительные важные аспекты**

*  Проект использует асинхронные операции чтения файлов для обеспечения неблокирующего поведения.
*  Он предоставляет методы для различных анализов транзакций, что делает его универсальным для различных случаев использования.
*  Класс TransactionAnalyzer может быть расширен или изменен для учета дополнительных требований анализа.



<?php
/*
 * @Author: your name
 * @Date: 2021-03-21 15:29:51
 * @LastEditTime: 2021-03-27 11:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /safe-lawyer-marketing/public/index.php
 */
date_default_timezone_set('Asia/Shanghai');
$db = require __DIR__ . '/../config/db.php';

function checkUsername($value) {
    if (trim($value) === '') {
        return [false, '请填写用户名'];
    }
    return trim($value);
}

function checkMobile($value) {
    if (trim($value) === '' || !preg_match("/^1[3456789]\d{9}$/", $value)) {
        return [false, '手机格式错误'];
    }
    return trim($value);
}

function checkCompany($value) {
    if (trim($value) === '') {
        return [false, '请填写公司名'];;
    }
    return trim($value);
}

function checkMessage($value) {
    return trim($value);
}

function checkStartAt($value) {
    if (trim($value) === '') {
        return [false, '请选择听课时间'];;
    }
    return trim($value);
}

$input = filter_input_array(INPUT_POST, [
    'username_val' => [
        'filter' => FILTER_CALLBACK,
        'options' => 'checkUsername'
    ],
    'mobile_val' => [
        'filter' => FILTER_CALLBACK,
        'options' => 'checkMobile'
    ],
    'company_val' => [
        'filter' => FILTER_CALLBACK,
        'options' => 'checkCompany'
    ],
    'message_val' => [
        'filter' => FILTER_CALLBACK,
        'options' => 'checkMessage'
    ],
    'start_at_val' => [
        'filter' => FILTER_CALLBACK,
        'options' => 'checkStartAt'
    ],
]);
// var_export($input);exit;
if (empty($input) || !is_array($input)) {
    echo json_encode(['code' => 10001, 'msg' => 'params error']);exit; 
}

foreach ($input as $item) {
    if (is_array($item) && isset($item[0]) && $item[0] === false) {
        echo json_encode(['code' => 10001, 'msg' => $item[1] ?? 'params error']);exit;
    }
}

try {
    // var_export($input);exit;
    $dbh = new PDO("mysql:host=".$db["host"].";port=".$db['port'].";charset=".$db['charset'].";dbname=".$db['dbname'], $db['user'], $db['pass']);

    $stmt = $dbh->prepare("INSERT INTO register_lesson (username, mobile, company, message, start_at) VALUES (:username, :mobile, :company, :message, :start_at)");
    $stmt->bindValue(':username', $input['username_val']);
    $stmt->bindValue(':mobile', $input['mobile_val']);
    $stmt->bindValue(':company', $input['company_val']);
    $stmt->bindValue(':message', $input['message_val']);
    $stmt->bindValue(':start_at', $input['start_at_val']);

    // 插入一行
    $stmt->execute();
    echo json_encode(['code' => 10000, 'msg' => '报名成功，稍后我们会与您联系！']);
} catch (\PDOException $exception) {
    echo json_encode(['code' => 10001, 'msg' => '报名出了点异常，请重试！']);
}
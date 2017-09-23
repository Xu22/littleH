/**
 * Created by Administrator on 2017/9/23.
 */


var btn = document.querySelector('.btn');
// 获取输入内容元素
var input = document.querySelector('textarea');

// 聊天窗口
var message = document.querySelector('.messages');

var item = '', result = '';

// 创建实例对象
var xhr = new XMLHttpRequest;

btn.onclick = function () {

    // 创建DOM元素
    item = createMessage('self', input.value);

    // 将创建好的DOM元素添加到聊天窗口
    message.appendChild(item);

    // 清空输入框
    input.value = '';

    // 设置请求行
    xhr.open('post', 'php/chat.php');

    // 设置请求头
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // 发送请求
    xhr.send();

    // 监听并处理响应结果
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            // 接收响应结果
            result = xhr.responseText;

            // 创建DOM元素
            item = createMessage('other', result);
            // 将创建好的DOM元素添加到聊天窗口
            message.appendChild(item);
        }
    }
}

// 动态创建DOM
// flag 代表自已说self 还是小黄人other
// text 代表说话的内空
function createMessage(flag, text) {
    // 创建结点
    var item = document.createElement('div'),
        h5 = document.createElement('h5'),
        p = document.createElement('p');

    // 添加类
    item.classList.add(flag);

    // 判断主体
    switch(flag) {
        case 'self':
            h5.innerText = '我说';
            break;
        case 'other':
            h5.innerText = '小黄人说';
            break;
    }

    // 插入文本
    p.innerText = text;

    // 追加节点
    item.appendChild(h5);
    item.appendChild(p);

    return item;

}

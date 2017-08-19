# MQTT协议简介

协议就是通信双方的一个约定。

**MQTT 数据包结构**

- `固定头（Fixed header）`，存在于所有`MQTT`数据包中，表示数据包类型及数据包的分组类标识
- `可变头（Variable header）`，存在于部分`MQTT`数据包中，数据包类型决定了可变头是否存在及其具体内容
- `消息体（Payload）`，存在于部分`MQTT`数据包中，表示客户端收到的具体内容


***Payload消息体***

`Payload`消息体位`MQTT`数据包的第三部分，CONNECT、SUBSCRIBE、SUBACK、UNSUBSCRIBE四种类型的消息 有消息体：

- - `CONNECT`，消息体内容主要是：客户端的ClientID、订阅的Topic、Message以及用户名和密码。
  - `SUBSCRIBE`，消息体内容是一系列的要订阅的主题以及`QoS`。
  - `SUBACK`，消息体内容是服务器对于`SUBSCRIBE`所申请的主题及`QoS`进行确认和回复。
  - `UNSUBSCRIBE`，消息体内容是要订阅的主题。
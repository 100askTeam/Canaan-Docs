# 1.资源包介绍

当我们在AI Matrix软件中，训练完成模型后，点击部署就会生成对应的端侧部署资源包在对应的项目目录中，生成的端侧部署资源包名称为：`deployment_source.zip`

解压该压缩包后可以得到三个文件夹，分别是：example_code、excute_demo_on_k510、TEMP。

example_code：包含部署示例代码，可以参考这部分代码将模型推理融入自己代码中。

excute_demo_on_k510：保存芯片端的可执行程序，用户可以直接在芯片端直接运行该程序。

TEMP：保存有用户训练的模型文件。



## 1.模型文件

进入TEMP目录中的项目目录中可以看到对应的模型文件，如下图所示：

![image-20240523171917882](http://photos.100ask.net/canaan-docs/image-20240523171917882.png)

> kmodel:K510芯片端使用的模型文件
>
> json：模型的信息文件，包含推理宽度和高度等信息。



## 2.可执行程序

进入excute_demo_on_k510目录中，可以看到对应的可执行程序。如下所示:

![image-20240523172228277](http://photos.100ask.net/canaan-docs/image-20240523172228277.png)

>  demo：芯片端的可执行程序。
>
> conf:配置文件，如摄像头的配置参数信息。
>
> ReadMe:详细介绍如何在K510上执行该程序。

 

## 3.部署示例代码

进入example_code目录中，可以看到对应的示例代码。如下所示:

![image-20240523173320482](http://photos.100ask.net/canaan-docs/image-20240523173320482.png) 

> 1. cmake：cmake编译所需文件
> 2. common：目录中包含K510 CRB开发板中对摄像头、屏幕操作的头文件
> 3. demo_code：目录中是与平台适配的C++ code，用户可通过修改、编译代码，重新生成demo可执行文件
> 4. jsoncpp：读取deploy_config.json所需的库文件
> 5. build.sh：编译脚本，下文会介绍如何使用
> 6. CMakeLists.txt：CMake编译配置文件
> 7. Readme.md：介绍如何使用示例代码。
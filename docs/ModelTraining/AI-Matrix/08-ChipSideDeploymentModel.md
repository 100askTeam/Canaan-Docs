# 7.芯片端侧部署模型

## 7.1   部署资源包组成

  打开本地工程路径，在工程路径下可以看到deploy_source.zip压缩包，将其解压可以看到example_code、excute_demo_on_k510、project三个文件夹，如图7-1所示。

![image-20240522175424212](http://photos.100ask.net/canaan-docs/image-20240522175424212.png)

图7-1 部署资源包内容

其中example_code中保存了芯片端部署需要的code资源，excute_demo_on_k510文件夹中保存了在k510芯片端使用的示例demo，project目录中保存了用户本次工程导出的模型及模型配置文件。用户可以按照需要在芯片端使用deployment_source资源。

## 7.2   工程模型资源

在图7-1中的project目录下保存着以工程名命名的文件夹，该文件夹中导出模型及配置参数。在芯片端使用的模型都会以kmodel作为文件结尾，打开模型配置参数文件deploy_config.json，可以看到如下字段，如图7-2所示。

![image-20240522175444589](http://photos.100ask.net/canaan-docs/image-20240522175444589.png)

图7-2 模型参数配置文件

在该文件中保存的参数与用户在AI Matrix中设置的参数一致。配置文件中各key值含义间表7-1。

| Key值                | Key值含义      |
| -------------------- | -------------- |
| chip_type            | 芯片型号       |
| inference_width      | 推理宽度       |
| inference_height     | 推理高度       |
| confidence_threshold | 置信度阈值     |
| export_kmodel_name   | 被导出模型名称 |
| model_type           | 模型结构       |
| img_size             | 训练时图像尺寸 |
| mean                 | 训练时均值     |
| std                  | 训练时标准差   |
| categories           | 数据集类别     |
| kmodel_path          | 导出后模型名称 |
| num_classes          | 数据集类别数量 |

表7-1 deploy_config.json key值含义

用户在使用AI Matrix导出模型后，在芯片端使用该文件时可以按照实际需求更改文件内容，一般不推荐用户更改该文件。

## 7.3   芯片端可执行demo

模型导出后，用户可以直接在K510芯片端推理模型，所用到的文件资源是deployment_source文件夹中的excute_demo_on_k510文件夹，该文件夹中保存着芯片端可执行二进制文件、开发板摄像头配置文件和readme文件。如图7-3所示。

![image-20240522175459192](http://photos.100ask.net/canaan-docs/image-20240522175459192.png)

图7-4 芯片端可执行demo文件

在使用该demo文件前需要先将project目录下的kmodel文件及模型参数配置json文件拷贝到demo同级目录下。

1、在使用时，如果是芯片端静态图推理，则在芯片控制台运行如下命令：

```
./demo deploy_config.json 1 test.jpg
```

其中，参数1代表本地静态图片推理；参数test.jpg为推理图片名称，用户可以根据实际情况对其更改。

2、如果使用芯片摄像头推理，则在芯片控制台运行如下命令：

```
./demo deploy_config.json 2 video.conf
```

其中，参数2代表使用摄像头模组进行推理；video.conf为摄像头模组配置文件。

## 7.4   芯片端部署code

example_code文件夹中存放的是芯片端推理的参考代码，其中cmake为编译时所需的cmake示例文件；common目录中包含K510 CRB开发板中摄像头、屏幕操作头文件；demo_code文件夹中存放的是与平台适配的C++ code,用户可以通过修改编译代码，重新生成demo可执行文件；jsoncpp为读取json文件所用的库文件；build sh为编译脚本；CMakeLists txt为CMake编译时所需要的配置文件。如图7-5所示。

![image-20240522175536361](http://photos.100ask.net/canaan-docs/image-20240522175536361.png)

图7-5 芯片端部署文件目录

其中，最重要的是demo_code文件夹，该文件夹中包含深度学习模型推理流程代码，打开main.cpp文件，main函数中包含有静态图推理和摄像头推理两个分支，分别由used==1和used==2控制，如图7-6所示。

![image-20240522175545891](http://photos.100ask.net/canaan-docs/image-20240522175545891.png)

图7-6 静态图推理/摄像头推理分支

 

每个分支下包含两个模型推理分支，分别由modelnum<11和modelnum<13两个分支控制。modelnum<11分支控制分类、检测推理过程，modelnum<13控制分割推理流程，如图7-7、7-8所示。

![image-20240522175608104](http://photos.100ask.net/canaan-docs/image-20240522175608104.png)

图7-7 分类检测推理过程

![img](http://photos.100ask.net/canaan-docs/image-20240522175619776.png)

图7-8 分割推理过程

 

如果是摄像头推理，需要用户开启两个线程来进行推理，分别是显示线程和推理线程，如图7-9所示。

![image-20240522175648672](http://photos.100ask.net/canaan-docs/image-20240522175648672.png)

图7-9 摄像头推理

在摄像头推理过程，用户需要的线程函数为display_worker、ai_worker_od以及ai_worker_seg。display_worker负责屏幕内容的显示刷新，ai_worker_od负责图像分类、目标检测推理，ai_worker_seg负责语义分割推理。线程函数的具体内容用户可以参考main.cpp中的封装。

 
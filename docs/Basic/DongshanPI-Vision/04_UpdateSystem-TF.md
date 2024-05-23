# 使用TF卡更新EMMC系统

硬件要求：

- DongshanPI-Vision开发板
- microSD卡（建议最小8G）
- Type-c数据线 x2

软件要求：

- DongshanPI-Vision开发板SD卡镜像：[https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046](https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046 ) 
- SD卡格式化工具:[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter_4/eula_windows/)
- SD卡刷机工具：[ETCHER](https://www.balena.io/etcher)

- 串口工具：[MobaXterm](https://mobaxterm.mobatek.net/)

开始前请下载DongshanPI-Vision开发板[SD卡镜像](https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046)和[EMMC镜像](https://dongshanpi.cowtransfer.com/s/5482c150ff6147 ) ，并记住它在计算机中保存的位置。

> 由于我们需要使用SD卡烧录EMMC镜像，在开始前，我们需要先制作SD卡镜像！！！！

## 1.制作SD卡镜像

### 1.1 格式化microSD卡

将您的SD卡使用读卡器通过USB口插入您的PC电脑，使用SD卡格式化工具[SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter_4/eula_windows/)格式化您的SD卡。点击下图中红框位置，开始格式化内存卡。

![image-20230721165711205](http://photos.100ask.net/canaan-docs/image-20230721165711205.png)

点击完成后会弹出下图所示的提示框，该提示警告我们格式化将清空卡中的所有数据，询问我们是否继续，这里点击`是`

![image-20230721165954580](http://photos.100ask.net/canaan-docs/image-20230721165954580.png)

等待格式化完成后，会弹出以下对话框，提示我们格式化后的文件系统为`FAT32`以及内存大小可用空间，点击确定即可完成SD卡的格式化。

![image-20230721170207480](http://photos.100ask.net/canaan-docs/image-20230721170207480.png)

### 1.2 使用Etcher烧录镜像

​	使用Etcher将DongshanPI-Vision开发板SD卡镜像写入您的microSD卡。

​	下载[Etcher](https://www.balena.io/etcher)烧写工具并安装它。启动Etcher应用程序，启动后界面如下图所示：

![image-20230721170709568](http://photos.100ask.net/canaan-docs/image-20230721170709568.png)

点击`Flash from file`，如下图所示，点击下图红框处。

![image-20230721170746679](http://photos.100ask.net/canaan-docs/image-20230721170746679.png)

此时会弹出文件资源管理器，选择您刚刚下载的DongshanPI-Vision开发板SD卡镜像。

![image-20230721171028315](http://photos.100ask.net/canaan-docs/image-20230721171028315.png)

选择完成后会，显示下面的界面，点击下图中红框处`Select target`，选择要写入的目标microSD卡。

![image-20230721172244447](http://photos.100ask.net/canaan-docs/image-20230721172244447.png)

点击完成后会弹出选择目标，此时选择您通过读卡器插入电脑中的microSD卡。

![image-20230721172220680](http://photos.100ask.net/canaan-docs/image-20230721172220680.png)

选择完成后，会显示以下界面，点击`Flash`后即可开始烧写。

![image-20230721172614694](http://photos.100ask.net/canaan-docs/image-20230721172614694.png)

如下图所示等待烧写完成即可。

![image-20230721172653819](http://photos.100ask.net/canaan-docs/image-20230721172653819.png)

使用Etcher烧写完成后，Windows可能会不知道如何读取您的microSD卡，会弹出如下图所示警告，点击`取消`后拔出microSD卡即可。

![image-20230721172939202](http://photos.100ask.net/canaan-docs/image-20230721172939202.png)

### 1.3 启动SD卡系统

​		将下图中的拨码开关的boot0向下拨和boot1向上拨，使开发板进入SD卡启动模式。将SD卡插入开发板的卡槽中，步骤如下图所示：

![k510-board-Install-sd-card](http://photos.100ask.net/canaan-docs/k510-board-Install-sd-card.png)

使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口登录开发板控制台。

![image-20230721184330238](http://photos.100ask.net/canaan-docs/image-20230721184330238.png)

使用串口软件查看串口控制台，成功启动后会进入开发板控制台。

![image-20230721184905618](http://photos.100ask.net/canaan-docs/image-20230721184905618.png)

## 2.拷贝镜像到SD卡的用户分区

在拷贝镜像前，我们需要在开发板端的SD卡的用户分区中新建任意文件，这样可以使得我们在Windows电脑端可以识别到SD卡的用户分区。

```
[root@canaan ~ ]$ ls
data  emmc  sd
[root@canaan ~ ]$ cd sd/p3/
[root@canaan ~/sd/p3 ]$ ls
System Volume Information  coredump
[root@canaan ~/sd/p3 ]$ touch 1.txt
[root@canaan ~/sd/p3 ]$ echo 100ask > 1.txt
[root@canaan ~/sd/p3 ]$ cat 1.txt
100ask
[root@canaan ~/sd/p3 ]$ sync
```

接下来断开 开发板的电源，取下SD卡，并使用读卡器通过USB口插入您的PC电脑，此时电脑可以读取到U盘的两个分区，如下图所示：

![image-20240522161005145](http://photos.100ask.net/canaan-docs/image-20240522161005145.png)

> 如果读取不到用户空间分区可使用DiskGenius软件读取分区，参考链接：[如何在Windows下读写Ext4/3/2分区？（DiskGenius教程）](https://zhuanlan.zhihu.com/p/616381018)

将EMMC镜像拷贝到SD卡的用户空间分区中，如下所示：

![image-20240522161516402](http://photos.100ask.net/canaan-docs/image-20240522161516402.png)

> 注意：我们在用户空间中创建1.txt，您可以查看分区是否有1.txt来确定操作的分区是否为用户空间分区。

拷贝完成后，将SD卡插回开发板上，并使用SD卡插入开发板并上电启动系统。



## 3.烧录emmc镜像

使用串口软件查看串口控制台，等待系统成功启动。系统启动后进入sd卡中的用户空间，查看EMMC镜像文件

```
[root@canaan ~ ]$ cd sd/p
p1/  p2/  p3/
[root@canaan ~ ]$ cd sd/p3/
[root@canaan ~/sd/p3 ]$ ls
1.txt                      coredump
System Volume Information  sysimage-emmc.img
```

烧录emmc镜像前，需要卸载掉emmc相关文件系统，在开始前，我们先查看一下EMMC相关的系统挂载信息。输入：

```
mount | grep emmc
```

输入结果如下所示：

```
[root@canaan ~/sd/p3 ]$ mount | grep emmc
/dev/mmcblk0p3 on /root/emmc/p3 type ext2 (rw,relatime,errors=continue)
/dev/mmcblk0p4 on /root/emmc/p4 type vfat (rw,relatime,fmask=0000,dmask=0000,allow_utime=0022,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro)
/dev/mmcblk0p2 on /root/emmc/p2 type vfat (rw,relatime,fmask=0000,dmask=0000,allow_utime=0022,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro)
```

可以看到系统挂载到了`mmcblk0p2`、`mmcblk0p3`、`mmcblk0p4`这三个分区中，接下来我们手动卸载这三个分区，输入：

```
umount /root/emmc/p2
umount /root/emmc/p3
umount /root/emmc/p4
mount | grep emmc
```

执行结果如下所示：

```
[root@canaan ~/sd/p3 ]$ umount /root/emmc/p2
[root@canaan ~/sd/p3 ]$ umount /root/emmc/p3
[root@canaan ~/sd/p3 ]$ umount /root/emmc/p4
[root@canaan ~/sd/p3 ]$ mount | grep emmc
```

卸载完成后，可以发现已经找不到EMMC系统的挂载信息了，输入如下命令烧录EMMC:

```
dd if=sysimage-emmc.img of=/dev/mmcblk0 bs=1M
```

执行结果如下图：

```
root@canaan ~/sd/p3 ]$ dd if=sysimage-emmc.img of=/dev/mmcblk0 bs=1M
544+0 records in
544+0 records out
570425344 bytes (544.0MB) copied, 27.453821 seconds, 19.8MB/s
```

**注：烧录过程较慢，大约需要30秒，请耐心等待。**

当烧录完成后，选择 BOOT为从EMMC启动，最后开发板上电即可从EMMC启动。

![image-20230721174905407](http://photos.100ask.net/canaan-docs/image-20230721174905407.png)

使用串口软件查看串口控制台，成功启动后会进入开发板控制台。

![image-20230721175557977](http://photos.100ask.net/canaan-docs/image-20230721175557977.png)

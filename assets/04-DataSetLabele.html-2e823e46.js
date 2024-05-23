import{_ as a,o as e,c as t,e as p}from"./app-93907a86.js";const n={},c=p('<h1 id="_4-数据集标注" tabindex="-1"><a class="header-anchor" href="#_4-数据集标注" aria-hidden="true">#</a> 4.数据集标注</h1><h2 id="_4-1-图像选项卡概览" tabindex="-1"><a class="header-anchor" href="#_4-1-图像选项卡概览" aria-hidden="true">#</a> 4.1 图像选项卡概览</h2><p>AI Matrix图像选项卡页面共由项目图像解析栏、数据集标签解析栏、图像标注解析画布、标签信息解析栏、图像路径列表5部分组成，如图3-1所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174817052.png" alt="image-20240522174817052"></p><p>图3-1 AI Matrix图像选项卡</p><p>1、项目图像解析栏：图3-1中的①号位置，该位置主要显示项目名称、项目类型、图像名称以及图像本地路径。</p><p>2、数据集标签解析栏：图3-1中的②号位置，该位置主要解析显示数据集中包含的所有类别（对于语义分割任务，不解析background背景类别）</p><p>3、图像标注解析画布：图3-1中的③号位置，该位置主要显示图片以及图片中的标注信息，对于不同的任务类型，画布中会有不同的解析结果，如图3-2所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174836259.png" alt="image-20240522174836259"></p><p>图3-2 不同任务类型的画布解析</p><p>其中图像分类任务会显示图片类别，目标检测任务会显示目标框和目标类别，语义分割会显示区域蒙版mask。</p><p>4、标签信息解析栏：图3-1中的④号位置，该位置主要解析图片中的标注信息，对于不同任务类型，该标签信息栏会有不同解析结果，如图3-3所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522174849886.png" alt="image-20240522174849886"></p><p>图3-3 不同任务标注信息解析</p><p>如图3-3所示，图像分类任务会解析单张图片的分类类别；目标检测任务会解析图片中包围框的类别与位置坐标；语义分割任务会解析出区域类别与区域所占的面积比例。</p><p>5、图像路径列表：图3-1中的⑤号位置，该位置主要解析数据集中的图像路径。</p>',16),s=[c];function o(r,i){return e(),t("div",null,s)}const d=a(n,[["render",o],["__file","04-DataSetLabele.html.vue"]]);export{d as default};
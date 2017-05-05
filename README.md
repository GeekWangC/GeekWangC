geekwangc
=========

this first repository
初识github 共同学习 共同进步

# Google浏览器跨域
> open -a "Google Chrome" --args -disable-web-security --user-data-dir=

# 为不同项目设置不同的用户

平时在开发的过程中，用到git时，要做一些特殊的配置，例如自己公司内网https的SSL证书未经过第三方机构签署，直接操作Git就会报错，需要设置忽略证书，即sslVerify。一般情况下，通过执行如下命令进行设置：

> git  config  --global  http.sslVerify "false"

用了忽略ssl证书。

这行命令实际上是设置了当前登录mac电脑的用户的全局git配置，即所有项目如果不设置该配置，那么默认采用这个配置。

实际上该行命令是修改了这个 ~/.gitconfig 这个文件，直接启动mac上的终端，执行显示所有文件（包含隐藏文件）的命令

> ls -all
就能看到 .gitconfig

输入open .gitconfig 命令即可用文本编辑器打开，看到刚刚命令行改动的配置，配置如下：

> [http]
    sslVerify = false

但是这些配置是相当于一个全局的配置，可能无法满足所有项目的需求。

比如自己公司内部的项目提交时设置的用户名为自己的真实姓名，但是在github上提交时，可能不想暴露真实姓名，这时候就不能采用通用的配置了，就要单独设置每个项目的git配置。

由于每个git项目下都会有一个隐藏的.git文件夹 ，将终端的工作目录设置到，相应的项目根目录下，执行ls -all

命令，显示所有文件，即可看到.git的隐藏文件夹。通过cd .git 进入该目录，发现该目录下有个config文件，采用

open config 命令打开，添加如下配置：

> [user]
    name = XXX(自己的名称英文)
    email = XXXX(邮箱)

保存，command+s 即可。这时候就为该项目配置了独立的用户名和邮箱，这时提交代码时，提交日志上显示的就是设置的名称，当然github这种会根据设置的邮箱来设置对应的用户名。

当然也可以通过命令行的方式(即要去掉--global参数)去设置单独的git配置，只需要在 .git 文件夹下。 例如执行如下命令：

> git  config  user.name  "xxxxx"
来修改当前项目提交代码时用到的用户名。

ps：如果全局的配置和当前项目的单独配置中出现相同的配置选项，比如全局和项目都设置了user.name ，那么在该项目中进行git操作时，会默认采用该项目配置的用户名。

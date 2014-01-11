#iOS开发入门教程

程序发轻狂，代码阑珊，苹果开发安卓狂！——写给狂热的编程爱好者们

![本文概览](http://www.seejs.com/wp-content/uploads/2013/05/iosDev540x346.png)

###写在前面的话

学习iOS应用程序开发已有一段时间，最近稍微闲下来了，正好也想记录一下前阶段的整个学习过程。索性就从最基础的开始，一步一步记录一个最简单的iOS应用从创建到运行的全过程，其中会穿插很多相关知识或是遇到过的问题。其实算不上教程，但希望能够帮助更多的开发爱好者更快、更好的入门。

###iOS开发环境简述

最友好，最现实，也是最方便的开发环境就是在Mac系统中安装Xcode进行开发。原因在于：第一，开发工具（Xcode）限制。苹果官方只提供Mac版的Xcode，而Xcode内置了Xcode IDE，性能分析工具，iOS SDK，iOS模拟器和最新的OS X，可以方便迅速的进行代码编辑以及应用调试，可谓是Mac和iOS开发工具的不二选择。第二，代码提示和自动补全。iOS开发中用到的类或方法的名称，为了更具语义化，让开发者一目了然，通常会比较长，这往往会让刚刚接触iOS开发的开发者为了记住这些方法而伤透脑经。而Xcode拥有优于其他编辑器的OC代码提示和自动补全功能，这将很大程度降低开发入门的门槛，这决定你开发iOS应用没有理由不使用Xcode。因此，使用非苹果电脑的开发者们最好安装Mac OS X的虚拟机，进行开发学习，否则你不仅会比别人花上多出一倍甚至更多的时间去搭建开发环境，而且代码编写上也会比使用Xcode开发的人花上更多的精力。

###第一步，创建项目

####1.1 新建iOS项目

打开Xcode，如果是首次打开Xcode，你将会看到一个欢迎界面，如图:

![Welcome to Xcode](http://www.seejs.com/wp-content/uploads/2013/05/welcome.png)

你可以直接在该界面中点击图中1处标记的`Create a new Xcode project`来创建一个项目，也可以点击图中2处标记的按钮来打开电脑中已经存在的Xcode项目。你还可以修改3处标记的复选框状态设置下次启动Xcode是否显示该欢迎界面。

本文不演示在此点击1处所示创建项目，首先点击该界面左上角的红色按钮退出该欢迎界面，然后点击屏幕左上角的`File`->`New`->`Project`。截图如下：

![新建项目](http://www.seejs.com/wp-content/uploads/2013/05/newPro.png)

接下来你将看到如下界面：

![选择应用模板](http://www.seejs.com/wp-content/uploads/2013/05/selectApp.png)

首先进行系统筛选，iOS应用则选择iOS列表对应项，OS X应用则选择OS X列表对应项。本例为iOS应用，故在此选择iOS中的`Application`（图中左上角红框所示），然后选择应用模板选择，在界面右边列出了多种最常用的应用模板类型，开发者按照自己的应用需求可自行选择，本例选择`Single View Application`（图中右上角红框所示）。做完以上选择后点击窗口右下角`Next`按钮，进入下一个设置窗口：

![应用基础信息设置](http://www.seejs.com/wp-content/uploads/2013/05/appSetting.png)

此处内容会根据个人情况而不同，故不做赘述，按照窗口提示，填写相关信息即可。注意窗口下方的三个复选框，其功能分别是`使用storyboards`、`使用自动引用计数器`、`包含单元测试`，根据个人情况勾选/取消即可。设置完成后点击右下角`Next`按钮，进入下一个窗口：

![选择保存位置](http://www.seejs.com/wp-content/uploads/2013/05/saveApp.png)

按照窗口所示，选择项目存储位置后点击窗口右下角`Create`按钮，完成应用创建过程。

####1.2 应用程序目录结构说明

项目创建完成之后，Xcode会进入项目开发界面，界面大致分为三部分，左侧项目及目录结构列表、中间为代码编辑区、右侧属性设置和控件列表等区域。下面是目录结构的截图：

![项目目录结构](http://www.seejs.com/wp-content/uploads/2013/05/tree1.png)

项目初始时包含如图所示三个主要目录，后续开发中开发者可以自行添加目录。其中：

 * `FirstIosApp`目录与项目名称同名，主要存放应用相关源代码和配置文件；
 * `Framework`存放项目使用到的框架，默认会添加图示三个必备框架；
 * `Products`用于存放生成的应用文件，开发中开发者一般不必关心。
 
####1.3 应用程序初始结构概览

整个应用程序的入口文件默认为`AppDelegate.m`，应该可以通过配置文件修改（未尝试）。其内部结构如下：

![应用程序入口结构](http://www.seejs.com/wp-content/uploads/2013/05/appdelegate.png)

该文件包含应用程序生命周期中各个阶段可以调用的方法接口，以便应用程序在不同的状态阶段能进行相应的操作。这些方法就不一一说明了，开发者几乎可以望名知意。

#####1.3.1 iOS应用程序的生命周期

对于上面图示方法如果还有不解的地方，可以参考下图（来源于网络）：

![iOS生命周期](http://www.seejs.com/wp-content/uploads/2013/05/lifecircle.png)

###第二步 代码入门（数据类型）

做iOS开发，仅仅懂得使用Xcode，仅仅了解目录结构，仅仅了解生命周期，是远远不够的，这些只是基础中的基础。一定的编程能力也是必不可少的。下面就简单的介绍一下iOS开发的编程语言——Objective-C，后面简称OC。

学习一门语言，往往需要从最基础的数据类型开始（记得大学学习的时候老师就是这么干的），至于编程逻辑，奇技淫巧等则是在开发过程中慢慢积累的。好言归正传。

####2.1 基础数据类型

OC是C语言的一个超类，因此OC拥有C或C++的几乎所有特性，当然它也有自己独具一格的地方。所以OC也支持C语言的数据类型，诸如int,float等也都可以在OC中使用。基础数据类型不是本文重点，在此就不多言辞了。

####2.2 OC数据类型

OC不是仅仅只能使用C/C++的数据类型，它也拥有自己的数据类型，虽然与通常人们熟知的各种数据类型看起来有点怪异，但事实上OC的数据类型是个很好玩的东西，也不难理解。下面列举几个常见的OC数据类型。

#####2.1.1 NSNumber类和NSInterger

NSNumber是以对象的形式来包装基础数据类型，它提供一下方法：

```
+ (NSNumber *) numberWithChar: (char) value;
+ (NSNumber *) numberWithInt: (int) value;
+ (NSNumber *) numberWithFloat: (float) value;
+ (NSNumber *) numberWithBool: (BOOL) value;
```
例如，要从一个int数据初始化一个NSNumber可以这样写：

```
NSNumber *number = [NSNumber numberWithInt: 100];
```

而要从NSNumber实例得到NSInteger数据则可以如下操作：

```
NSInteger integer = [number intValue];
```

#####2.1.2 NSString类型

NSString是OC的字符串类。与普通字符串不同的是NSString的值需要在普通字符串前加上一个`@`符号。例如要初始化一个'I'm a string.'的OC字符串，我们需要这样做：

```
NSString *str = [NSString stringWithString: @"I'm a string."];
```

看起来很麻烦，很复杂的样子，不要担心，OC应该也考虑到了这一点，所以它也提供简写形式：

```
NSString *str = @"I'm a string.";
```

NSString类还提供了很多其他形式的创建字符串的方法（比如：stringWithFormat等），这里就不一一列举了，以后在开发中慢慢体会吧。

####2.1.3 NSArray类型

NSArray是OC的数组类。OC的数组是很强大的，在一个数组中可以允许存在不同类型的数据，这个特性就跟强大的JavaScrit一样。初始化一个数组可以这样操作：

```
NSArray *arr = [NSArray arrayWithObjects:@"a", @"b", @1, nil];
```

当然也支持简化形式：

```
NSArray *arr = @[@"a", @"b", @1];
```

需要说明一点，使用`arrayWithObjects`方法创建数组的时候最后需要以`nil`结尾，而使用简化方式的时候不需要。

开发中可以使用以下两种形式获取数组对应索引位置（index）的值：

```
NSString *a = arr[index];
NSString *b = [arr objectAtIndex: index];
```

####2.1.4 NSDictionary类型

NSDictionary是OC的字典类。字典类型在使用中以key-value键值对的形式存在。也支持多种初始化方式，下面列举两种：

```
NSDictionary *dic = [NSDictionary dictionaryWithObjects:@[@"a",@"b", @"c"] forKeys:@[@"first", @"second", @"third"]];
```

```
NSDictionary *dic = @{@"first": @"a", @"second": @"b", @"third": @"c"};
```

取值方法跟NSArray大同小异：

```
NSString *a = [dic objectForKey: @"first"];
NSString *b = dic[@"second"];
```

####2.1.5 NSDate类型

NSDate是OC的日期类。常见用法举例：

```
NSDate *date = [NSDate date]; //返回当前时间
NSDate *date = [[NSDate alloc] init]; //初始化为当前时间，类似date
```

###第三步 OC类的认识（成员变量和方法）

iOS开发常常伴随着视图，而视图往往离不开视图控制器，在iOS开发中每一个视图控制器就是一个OC的类，因此学习iOS开发就必须了解OC的类。

OC的类使用`@interface ClassName: superClass <protocol> … @end`结构来定义，NSObject是所有OC类的父类。与java相比OC的`@interface`关键字就等同于JAVA的`class`关键字，OC的`protocol`就是JAVA中的`interface`，这一点很据迷惑力，大家在学习时需要特别注意。

####3.1 类的声明

举例声明一个Person的类（视图控制器）并实现它，拥有`name`、`age`两个成员变量，自然需要定义`getName`和`setName`、`getAge`和`setAge`，下面我们看下这个过程。

首先，类的结构如下：

```
@interface Person: NSObject {
    NSString *name;
    int age;
}

@end
```

然后，我们声明它的setter和getter方法，用来设置和读取它的成员变量的值。按照传统方式应该如下定义：

```
@interface Person: NSObject {
    NSString *name;
    int age;
}

- (void) setName: (NSString *) newName;
- (NSString *) getName;

- (void) setAge: (int) newAge;
- (int) getAge;

@end
```

看，是不是很简单？然而，既然上面说了是传统方式，那么肯定OC还提供了更现代的方式：

```
@interface Person: NSObject {
    NSString *name;
    int age;
}

@property(nonatomic, strong) NSString *name;
@property(nonatomic, assign) int age;

@end
```

没错，你没看错，就这么简单，它的功能和上面的代码是一样的。补充一下，@property本身可以接受参数来指定变量的getter和setter方式，其参数可用值和具体功能如下：

```
nonatomic //声明变量只在单线程中工作
atomic //默认值，可能有多个线程会用到这个变量

copy //分配一个新的空间，把原地址的内容复制过来
assign //简单的传递指针
retain //传递指针后引用计数器（retainCount）会自加1

strong //强引用
weak //弱引用
```

声明就这样就完成了，下面我们看下它的具体实现，在OC中类的实现需要使用另外一个关键字`@implementation`，格式如下：

```
@implementation Person

@end
```

我们还是先看下传统方式声明getter和setter方法该如何实现：

```
@implementation Person

- (void) setName: (NSString *) newName {
    self.name = newName;
}

- (NSString *) getName {
    return self.name;
}

- (void) setAge: (int) newAge {
    self.age = newAge;
}

- (int) getAge {
    return self.age;
}

@end
```

看完传统实现方式，是不是很想一睹现代方式的风采？我们继续往下看：

```
@implementation Person

@synthesize name;
@synthesize age;
//或者直接下面一句
//@synthesize name,age;

@end
```

是不是很神奇？在新版的Xcode中，@synthesize是可以省略的，但是建议还是都写上。

####3.2 “+”和“-”

仔细的读者应该已经发现在上面的传统方式中包含了一个神奇的符号“-”。这个是什么意思呢？首先我们需要说明一下，一个类可以拥有成员变量和方法，而方法可以包含类方法和实例方法。所谓类方法是可以使用类名直接调用的方法，而实例方法是需要该类的实例才可以调用的方法。而在OC中使用“+”表示该方法为类方法，而“-”很简单自然是表示实例方法了。

至于方法的声明和实现大致和传统方式声明getter和setter是一样的，这部分就不再重复了。

###第四步 运行和调试

每一个应用的开发过程都是漫长的，而在这个过程中我们免不了需要不时的运行一下程序，看看当前的效果，检查一下代码是否存在异常或者错误。

####4.1 iOS模拟器

#####4.1.1 选择设备

Xcode的强大不是吹出来的，在Xcode中内置了iOS模拟器，能够模拟几乎所有iOS真机的功能，因此开发者可以通过iOS模拟器测试正在开发中的应用程序，提高开发效率，减少错误，节省开发时间。在运行前选择与应用对应的模拟设备是必须的，否则可能导致运行结果出现意外的问题。

在Xcode的菜单栏下方提供了选择模拟器的地方，如图所示：

![选择模拟器](http://www.seejs.com/wp-content/uploads/2013/05/simulator.png)

选择好模拟器后点击左侧的`Run`按钮，就可以在指定的模拟器中启动应用了。第一次启动模拟器一般会比较慢，后面就好了。同样可以点击`Run`旁边的`Stop`按钮，停止模拟器中的当前应用。也许有些时候你想独立运行iOS模拟器，而不启动当前应用，这也是可以的，请看下图：

![启动模拟器](http://www.seejs.com/wp-content/uploads/2013/05/startsimulator.png)

也许相同的设备，但是却又多个尺寸，多个屏幕分辨率，例如：iPhone就有4、4S、5等。那怎么选择呢？别当心，有模拟器呢：

![选择不同的分辨率](http://www.seejs.com/wp-content/uploads/2013/05/screen.png)

真是iOS模拟器在手，开发调试不用愁啊！

####4.1.2 模拟器自定义设置

看完了上面的介绍，是不是感觉有一种马上动手的冲动？先别急，还有更高级的呢！大家知道，现在很多流行的iOS应用都有定位功能，那么在模拟器怎么测试定位呢？看看下图你就明白了：

![设置模拟器经纬度](http://www.seejs.com/wp-content/uploads/2013/05/address.png)

####4.1.3 存储屏幕快照

开发应用程序通常都不是一步到位的，过程中可能会产生各种各样稀奇古怪的现象，也许是显示不正常，也许是出现意外的效果，也或者你想把你当前的显示效果分享给开发团队的其他成员，这个时候作为开发者，你也许想要记录出现的这些现象，比如：截图、录屏什么的。这些都是不错的方法，但是iOS模拟器拥有更加方便的方式，如图所示：

![存储屏幕快照](http://www.seejs.com/wp-content/uploads/2013/05/saveScreen.png)

###4.2 程序调试

每一个开发者都不能保证他的程序是完美的，所以通常在我们运行程序的时候会出现很多奇怪的警告或者错误，有的可以一目了然，迎刃而解，有的却隐藏得很深，很难发现。这时候断点调试就直观重要了。

在代码编辑器的左边的行号区，鼠标在这个区域单击可以在对应行上添加/关闭（不是删除）断点。启动断点，当再次运行程序的时候，程序若执行到当前行，则会暂停在当前行上，开发者可以在控制台看到断点处记录的信息。大致如图：

![断点调试](http://www.seejs.com/wp-content/uploads/2013/05/breakPoint.png)

如图所示，在断点处我们可以在控制台看到变量date的当前值以及内存地址等信息，这样就可以通过这些信息判断程序运行到该处时是否正常，也可以这样查看一些其他信息。

###4.3 NSLog

有些时候我们可能会遇到一些仅靠断点无法解决的问题，这时我们还可以借助NSLog进行调试。NSLog也用于在控制台输出信息。如图：

![NSLog调试](http://www.seejs.com/wp-content/uploads/2013/05/nslog.png)

好了，到此告一段了，希望能帮助大家。


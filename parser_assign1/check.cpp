#include<iostream>
#include<fstream>
#include<string.h>
#include<ctype.h>
#include<string>

using namespace std;

class Indentation                                                 /*This class is responsible for checking whether class and its methods are indented or not*/
{ public:
  string line;
  ifstream myReadFile;
  int count1,class_var,meth_var,end_var,class_count,meth_count;
  
  public: Indentation()
  { 
    count1=0;
    class_count=1;
    meth_count=1;
  }
  
  public:void findIndentationruby(char in_file1[100])           /*findIndentaionruby method checks an indentaion of ruby code*/
  {
    myReadFile.open(in_file1);
    if (myReadFile.is_open()) 
    {       
      while (!myReadFile.eof()) 
      {
        getline(myReadFile,line);
        for(  unsigned int count=0;count<line.length();count++)
        { 
          if(line[count]==' ')
            count1++;
          else
            break;

        }

        
        if(line.find("class")!=string::npos)
        {
          class_var=count1;
          end_var=200;

        }
        if(line.find("def")!=string::npos)
        {
          meth_var=count1;
          end_var=200;
        }
        if(line.find("end")!=string::npos)
          end_var=count1;

        if(meth_var==end_var)
        {
          meth_var=100;
          end_var=200;
          cout<<"method "<<meth_count<<" of class "<<class_count<<" is aligned"<<"\n";
          meth_count++;
        }

        if(class_var==end_var)
        {
          class_var=300;
          end_var=200;
          cout<<"class "<<class_count<<" is aligned"<<"\n";
          class_count++;
          meth_count=1;
        }

        count1=0;


      }

    } 
    myReadFile.close();  
  
  }
  
  public:void findIndentationjava(char in_file1[100])                     /*findIndentaionruby method checks an indentaion of java code*/
  {
    myReadFile.open(in_file1);
    if (myReadFile.is_open()) 
    {       
      while (!myReadFile.eof()) 
      {
        getline(myReadFile,line);
        for(  unsigned int count=0;count<line.length();count++)
        { 
          if(line[count]==' ')
            count1++;
          else
            break;

        }

        
        if(line.find("class")!=string::npos)
        {
          class_var=count1;
          end_var=200;

        }
        if(line.find("(")!=string::npos)
        {
          meth_var=count1;
          end_var=200;
        }
        if(line.find("}")!=string::npos)
          end_var=count1;

        if(meth_var==end_var)
        {
          meth_var=100;
          end_var=200;
          cout<<"method "<<meth_count<<" of class "<<class_count<<" is aligned"<<"\n";
          meth_count++;
        }

        if(class_var==end_var)
        {
          class_var=300;
          end_var=200;
          cout<<"class "<<class_count<<" is aligned"<<"\n";
          class_count++;
          meth_count=1;
        }

        count1=0;


      }

    }
    myReadFile.close();   
  }
  
  public:void findIndentationphp(char in_file1[100])                               /*findIndentaionruby method checks an indentaion of php code*/
  {
    myReadFile.open(in_file1);
    if (myReadFile.is_open()) 
    {       
      while (!myReadFile.eof()) 
      {
        getline(myReadFile,line);
        for(  unsigned int count=0;count<line.length();count++)
        { 
          if(line[count]==' ')
            count1++;
          else
            break;

        }

        
        if(line.find("class")!=string::npos)
        {
          class_var=count1;
          end_var=200;

        }
        if(line.find("function")!=string::npos)
        {
          meth_var=count1;
          end_var=200;
        }
        if(line.find("}")!=string::npos)
          end_var=count1;

        if(meth_var==end_var)
        {
          meth_var=100;
          end_var=200;
          cout<<"method "<<meth_count<<" of class "<<class_count<<" is aligned"<<"\n";
          meth_count++;
        }

        if(class_var==end_var)
        {
          class_var=300;
          end_var=200;
          cout<<"class "<<class_count<<" is aligned"<<"\n";
          class_count++;
          meth_count=0;
        }

        count1=1;


      }

    }
    myReadFile.close();   
  }


};




int main()                    /*In main there is a code to identify the type of file */
{ 
  char in_file[100];
  cin>>in_file;
  Indentation* Obj=new Indentation();
  int counter=0;
  ifstream myReadFile;
  myReadFile.open(in_file);
  char output[100];
  if (myReadFile.is_open())
  {       
    while (!myReadFile.eof())
    {
      myReadFile >> output;
      if(strcmp("import",output)==0)
      {  
        cout<<"Program is written in java"<<"\n";
         Obj->findIndentationjava(in_file);
        break;
 
      }

      if(strcmp("class",output)==0)
      { 
        counter=1;
      }

      if(counter==1&&isupper(output[0])&&islower(output[2]))
      {
        cout<<"Program is written in java"<<"\n";
        Obj->findIndentationjava(in_file);
        break;

      }

      if(strcmp("<?php",output)==0)
      {
        cout<<"Program is written in PHP"<<"\n";
         Obj->findIndentationphp(in_file);
        break;
      }

      if(strcmp("end",output)==0||strcmp("def",output)==0)
      {
        cout<<"Program is written in Ruby"<<"\n";
        Obj->findIndentationruby(in_file);
        break;
      }
    }
  }

  myReadFile.close();
  return 0;
}

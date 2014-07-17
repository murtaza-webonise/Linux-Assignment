#include<iostream>
#include<fstream>
#include<string.h>
#include<ctype.h>
#include<string>


using namespace std;

bool findChar(char []);              /* This function findChar is used for finding a character in between string*/

class Identifier                      /* This class Identifier is responsible for parsing a whole file and to identify the classes methods and variables contained
                                         in it */ 
{                                     
  char dumy[100];
  ifstream myReadFile;
  char output[100];
  int count,count1;

 
  public:void checkJava(char in_file1[100])         /* checkJava method is used for parsing a java file */    
  {  
    myReadFile.open(in_file1);
  
    if (myReadFile.is_open())
    {       
      while (!myReadFile.eof())
      {
        myReadFile >> output;
        if(strcmp("import",output)==0)
        { 
          count=0;
        }

        if(strcmp("class",output)==0)
        { 
          count=1;
        }

        if(count==1&&isupper(output[0])&&islower(output[2]))
        { 
            
          cout<<"class name is"<<" "<<output<<"\n";
          count=0;

        }

        if(strcmp("public",output)==0||strcmp("protected",output)==0||strcmp("private",output)==0)
        {
          strcpy(dumy,output);
          count1=1;
        }

        if(count1==1)
        {
        char ch=output[strlen(output)-1];

        if(ch==';')
        {
          cout<<"variable name is "<<output<<" with access specifier "<<dumy<<"\n" ;
          count1=0;
          strcpy(dumy,"");
        }
               
        if(ch==')')
        {
        cout<<"function name is "<<output<<" with access specifier "<<dumy<<"\n" ;
        count1=0;
        strcpy(dumy,"");
        }

        if(count1!=0)
        {
          if(findChar(output))
          {
            cout<<"function name is "<<output<<" with access specifier "<<dumy<<"\n" ;
            count1=0;
            strcpy(dumy,"");
          }
        }

        }
 

      }

    }

    myReadFile.close();

  } 
 
 
  public:void checkPhp(char in_file1[100])                  /* checkPhp method is used for parsing a php file */    
  {
    int flag=0;
    myReadFile.open(in_file1);
    if (myReadFile.is_open()) 
    {       
      while (!myReadFile.eof())
      {
        myReadFile >> output;
        if(strcmp("class",output)==0)
        {
          count=1;
        }             

        if(count==1&&isupper(output[0]))
        { 
          cout<<"class name is"<<" "<<output<<"\n";
          count=0;
        }

        if(strcmp("public",output)==0||strcmp("protected",output)==0||strcmp("private",output)==0)
        {
          strcpy(dumy,output);
          flag=1;
          count1=1;
          myReadFile >> output;
          if(strcmp(output,"function")==0||strcmp(output,"var")==0)
          {
            myReadFile >> output;
          }
          else
            flag=0;
        } 
           
           
        if((strcmp(output,"function")==0&&flag==0)||(strcmp(output,"var")==0&&flag==0))
        {
          strcpy(dumy,"default");
          count1=1;
              
        }
           
        if(count1==1)
        {
          if(output[0]=='$')
          {
            cout<<"variable name is "<<output<<" with access specifier "<<dumy<<"\n" ;
            count1=0;
            flag=0;
            strcpy(dumy,"");
          }
          if(output[strlen(output)-1]==')')
          {
            cout<<"function name is "<<output<<" with access specifier "<<dumy<<"\n" ;
            count1=0;
            flag=0;
            strcpy(dumy,"");
          }        
          if(count1!=0)
          {
            if(findChar(output))
            {
              cout<<"function name is "<<output<<" with access specifier "<<dumy<<"\n" ;
              count1=0;
              flag=0;
              strcpy(dumy,"");
            }
          }
        }


      }
    }

myReadFile.close();

  }
    
  public:void checkRuby(char in_file1[100])                                     /* checkJava method is used for parsing a Ruby file */    
  {
    myReadFile.open(in_file1);
    if (myReadFile.is_open()) 
    {       
      while (!myReadFile.eof()) 
      {
        myReadFile >> output;
        if(strcmp("class",output)==0)
        { 
          count=1;
        }
          
        if(count==1&&isupper(output[0]))
        { 
          cout<<"class name is"<<" "<<output<<"\n";
          count=0;
        }

        if(output[0]=='@')
        {
          cout<<"variable name is "<<output<<"\n" ;
        } 

        if(strcmp("def",output)==0)
        {
          count1=1;
        }
         
        if(count1==1)
        {
          myReadFile >> output;
          cout<<"method name is "<<output<<"\n" ;
          count1=0;
        }

      }
    }

      myReadFile.close();
    
  }
    
};



int main() 
{
  Identifier obj;
  char in_file[100];
  cin>>in_file;
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
        obj.checkJava(in_file);
        break;
 
      }

      if(strcmp("class",output)==0)
      { 
        counter=1;
      }

      if(counter==1&&isupper(output[0])&&islower(output[2]))
      {
        cout<<"Program is written in java"<<"\n";
        obj.checkJava(in_file);
        break;

      }

      if(strcmp("<?php",output)==0)
      {
        cout<<"Program is written in PHP"<<"\n";
        obj.checkPhp(in_file);
        break;
      }

      if(strcmp("end",output)==0||strcmp("def",output)==0)
      {
        cout<<"Program is written in Ruby"<<"\n";
        obj.checkRuby(in_file);
        break;
      }
    }
  }

myReadFile.close();

return 0;
}

bool findChar(char ptr[])
{ 
  bool value=false;
  for(unsigned int i=0;i<strlen(ptr);i++)
  {
    if(ptr[i]=='(')
    {
      value=true;
      break;
    }   
  }
return value;
}





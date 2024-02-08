#include <fstream>
#include <iostream>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

using namespace std;

class tel
{
	char name[50], city[50], add[81], occ[81];
	char num1[11], num2[11], num3[11];

public:
	void insert()
	{
		char ch;
		cout << "\n ENTER THE FOLLWING INFORMATION  ";
		cin.getline(name, 0);
		cout << "\n NAME: ";
		cin.getline(name, 100);
		cout << " CITY: ";
		cin.getline(city, 100);
		cout << " OCCUPATION: ";
		cin.getline(occ, 100);
		cout << " ADDRESS: ";
		cin.getline(add, 100);
		cout << " NUMBER 1: ";
		cin.getline(num1, 100);
		cout << "\n YOU WANTS TO ENTER OTHER NUMBER ( press Y )";
		cin >> ch;
		if (ch == 'Y' || ch == 'y')
		{
			cout << "\n NUMBER 2 ";
			cin.getline(num2, 100);
			cout << "\n YOU WANTS TO ENTER OTHER NUMBER ( press Y )";
			cin >> ch;
			if (ch == 'Y' || ch == 'y')
			{
				cout << "\n NUMBER 3 ";
				cin.getline(num3, 100);
			}
			else
			{
				strcpy(num3, " ");
			}
		}
		else
		{
			strcpy(num2, " ");
			strcpy(num3, " ");
		}
	}
	void display()
	{
		cout << "\n THE FOLLWING IS THE DETAIL OF PERSON ";
		cout << "\n NAME " << name;
		cout << "\n CITY " << city;
		cout << "\n OCCUPATION " << occ;
		cout << "\n ADDRESS " << add;
		cout << "\n NUMBER 1 " << num1 << "\n NUMBER 2 " << num2;
		cout << "\n NUMBER 3 " << num3;
	}

	char *fnam()
	{
		return (name);
	}
	char *fnum1()
	{
		return (num1);
	}
	char *fnum2()
	{
		return (num2);
	}
	char *fnum3()
	{
		return (num3);
	}
};
void sername();
void sernum();
void delet();

void sername()
{
	int i = 0;
	char str[50];
	tel e1;
	
	cin.getline(str, 0);
	cout << "\n Enter Name of personto be search: ";
	cin.getline(str, 100);
	
	fstream fin("tel.dat", ios::binary | ios::in);
	if (!fin)
	{
		cout << "\n No record Exists.  ";
	}
	else
	{
		while (fin.read((char *)&e1, sizeof(e1)))
		{
			cout << "in while";
			if (strcmpi(e1.fnam(), str) == 0)
			{
				// cout<<"in while";
				i++;
				e1.display();
			}
		}
		if (i == 0)
			cout << "\n PERSON NAME IS NOT IN LIST ";
		fin.close();
	}
}

void disprec()
{
	tel e1;
	int i = 0;
	fstream fin("tel.dat", ios::binary | ios::in);
	if (!fin)
	{
		cout << "\n IO Error  ";
	}
	else
	{
		while (fin.read((char *)&e1, sizeof(e1)))
		{
			i++;
			e1.display();
		}
		if (i == 0)
		{
			cout << "\n No Data ";
		}
		fin.close();
	}
}

void sernum()
{
	int i, k = 0;
	fstream fin("tel.dat", ios::binary | ios::in);
	if (!fin)
	{
		cout << "\n IO Error  ";
	}
	else
	{
		char str1[50];
		cin.getline(str1, 0);
		cout << "\n Enter NUMBER to be search: ";
		cin.getline(str1, 100);

		tel e1;
		while (fin.read((char *)&e1, sizeof(e1)))
		{
			if (strcmpi(e1.fnum1(), str1) == 0 || strcmpi(e1.fnum2(), str1) == 0 || strcmpi(e1.fnum3(), str1) == 0)
			{
				k++;
				e1.display();
				break;
			}
		}
		if (k == 0)
			cout << "\n PERSON NUMBER IS NOT IN LIST ";
		fin.close();
	}
}

void delet()
{
	int i;
	fstream fin("tel.dat", ios::binary | ios::in);
	fstream fig("tel1.dat", ios::binary | ios::out);
	if (!fin)
	{
		cout << "\n IO Error  ";
	}
	else
	{
		int j = 0;
		char str[50], op;
		tel e1;

		cin.getline(str, 0);
		cout << "\nEnter Name whose record to be removed :";
		cin.getline(str, 100);

		while (fin.read((char *)&e1, sizeof(e1)))
		{
			int k;
			j++;
			if (strcmpi(str, e1.fnam()) == 0)
			{
				i++;
				e1.display();
				cout << "\nDo you want to delete it: ";
				cin >> op;
				if (toupper(op) == 'Y')
					cout << "\n RECORD DELETED ";
				else
					fig.write((char *)&e1, sizeof(e1));
			}
			else
				fig.write((char *)&e1, sizeof(e1));
		}
		if (i == 0)
			cout << "\n PERSON NAME IS NOT IN LIST ";
		fin.close();
		fig.close();
		remove("tel.dat");
		rename("tel1.dat", "tel.dat");
	}
}

void insert1()
{
	tel e1;
	fstream fin("tel.dat", ios::binary | ios::app);
	if (!fin)
	{
		cout << "\n IO Error  ";
	}
	else
	{
		e1.insert();
		fin.write((char *)&e1, sizeof(e1));
		fin.close();
	}
}
int recmain()
{
	char ch;
	while (1)
	{
		cout << "\n\n\n\t\tRecord Management";
		cout << "\n\t\t~~~~~~~~~~~~~~~~~";
		cout << "\n\t1. Insert a Record";
		cout << "\n\t2. Delete a Record";
		cout << "\n\t3. Display all Records";
		cout << "\n\t4. back";
		cout << "\n\n\tEnter Your Choice: ";
		cin >> ch;
		switch (ch)
		{
		case '1':
			insert1();
			break;
		case '2':
			delet();
			break;
		case '3':
			disprec();
			break;
		case '4':
			return 0;
		default:
			cout << "\nInvalid choice";
		}
	}
}
int searchmain()
{
	char ch;
	while (1)
	{
		cout << "\n____________________________________________________________________________________________________________________\n";
		cout << "\n\n\n\t\tSearch Operation";
		cout << "\n\t\t~~~~~~~~~~~~~~~~";
		cout << "\n\t1. By Name";
		cout << "\n\t2. By Number";
		cout << "\n\t3. back";
		cout << "\n\n\tEnter Your Choice: ";
		cin >> ch;
		switch (ch)
		{
		case '1':
			sername();
			break;
		case '2':
			sernum();
			break;
		case '3':
			return 0;
		default:
			cout << "\nInvalid choice";
		}
	}
}

int main()
{
	char ch;
	while (1)
	{
		cout << "\n\n\n\t\tTelephone Directory";
		cout << "\n\t\t~~~~~~~~~~~~~~~~~~~~";
		cout << "\n\t1. Record Management";
		cout << "\n\t2. Search Operation";
		cout << "\n\t3. Exit";
		cout << "\n\n\tEnter Your Choice: ";
		cin >> ch;
		switch (ch)
		{
		case '1':
			recmain();
			break;
		case '2':
			searchmain();
			break;
		case '3':
			exit(0);
		default:
			cout << "\nInvalid choice";
		}
	}
	return 0;
}

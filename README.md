
# Fake News Detection 

With tremendous amount of data flowing over internet, most of them are found
fake but still people prefer the internet source as it is the easiest means. Unfortunately the open source has become the platform to release news without effective
supervision. Fake news are delivered cleverly in a traditional method that implies
to be truthful but contain misleading information. By utilizing different philosophies, realizing the correctness of the news is a fascinating issue.

## Content
The following files are included:
| Folder / File | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Dataset`      | `folder` | Contains Pre-processed dataset |
| `FakeNewsDetection`      | `Backend Folder` | django based backend system for our project |
| `Project Demo`      | `Video file` | Contains video of how our project works |
| `Research Paper`      | `files` | All the resesearch paper we referenced for our project |
| `Frontend`      | `folder` | UI of our Frontend  |
| `requirements.txt`      | `file` | **Required**. Python Library required for the projects |


## How to Use This Script ?
To clone our project,
```bash
  git clone git@github.com:iamrosan/Fake-News-Detection-BCT-Mini-Project-.git
```

Foremost thing is you need to install the requirements so you could run everything. This repository contains a requirements.txt

To install requirements.txt

```bash
  pip install -r requirements.txt
```

To run the Fake News Detection,

First change the directory to FakeNewsDetection
```bash
  cd FakeNewsDetection
```
And, run server
```bash
  py manage.py runserver
```
Go to local host server on the browser of your choice
```bash
 127.0.0.1:8000
```
## How it works?
We have got two buttons to allow user to test whether the news article or the content of url of the online news is True or Fake.

For testing article of the news, click on **For Article**.
 
 ![article](https://user-images.githubusercontent.com/43814550/158328311-cc1a519a-48bc-4cbb-8355-84ec9a3eafba.png)


For testing contents of url of online news portal, click on **For Url** and insert the link of the news article.
 
 ![url](https://user-images.githubusercontent.com/43814550/158328442-485c615b-21e5-4e04-ad0f-e88d1f01f3cd.png)

Once you have article or url of the news portal, hit predict button or press Enter.

**UI for Real News**
![frontend](https://user-images.githubusercontent.com/43814550/158327060-401d5a23-6900-4bf9-ad41-9072cb85f478.png)

**UI for Fake News**
![frontend2](https://user-images.githubusercontent.com/43814550/158327141-c74fb3c9-45d5-4782-a464-315923ab6fad.png)

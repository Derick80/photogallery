import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    const email = (await process.env.SEED_EMAIL) as string

    // cleanup the existing database
    await prisma.user.delete({ where: { email: email } }).catch(() => {
      // no worries if it doesn't exist yet
    })

    const hashedPassword = (await process.env.HASHEDPASSWORD) as string

    const user = await prisma.user.create({
      data: {
        email,
       password: hashedPassword,
       userName:'DCH'
        }
    })

      await prisma.photos.createMany({
        data: [
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230131_104733719.MP.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230131_104746007.MP.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230131_110609004.MP.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230131_110612421.MP.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_020809747.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_020814000.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_020854627.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_020905818.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_020908429.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021050915.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021053590.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021212894.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021214455.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021216650.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021405442.PORTRAIT.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021408641.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021420731.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021428913.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021519683.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021553838.MOTION-01.COVER.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021605067.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021919307.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_021931359.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_022303520.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_022550976.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_023507440.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_023514635.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_024354856.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_024430113.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030219672.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030224606.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030257595.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030304393.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030305878.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030318969.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_030940818.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_031013474.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_031027845.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_031034511.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_031107675.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230201_031710071.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_030907020.MP.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_032717309.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_033048228.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_034311681.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_034340103.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_034346041.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_034701212.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_043647667.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_052235588.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_052249834.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_052252213.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_052422012.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230202_052424142.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_022948701.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_023108872.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_023405006.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_023616065.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_024332492.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_072425316.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_072449779.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kanazawa/PXL_20230203_115659237.jpg",
            "city": "kanazawa",
            "description": "description",
            "title": "title", "userId": user.id
        },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230205_234917232.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000447694.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000532333.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000532333.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000545469.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000924940.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_000930311.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_001149867.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_001312997.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_001440937.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_001653914.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_002642375.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_002721318.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_002723733.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_002822272.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020506888.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020543826.PANO.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020607923.PANO.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020645995.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020653425.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020705758.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020710804.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020712388.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020712388.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020713796.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020713796.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_020845966.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021050223.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021138402.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021145232.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021638550.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021646088.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021701390.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021837412.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021923327.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_021934611.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_073638962.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_073701055.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_120104545.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230206_120618002.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043140972.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043446562.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043446562.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043447518.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043447518.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043453549.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043453549.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043454314.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043454314.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043455051.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043455051.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043649624.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043649624.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043812960.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043812960.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_043815245.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044211011.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044211011.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044212932.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044212932.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044230503.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044910832.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_044916858.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_045126283.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_045128293.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_045143463.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_045356500.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_050149581.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_050711197.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_050712988.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_050850100.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051242756.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051248157.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051249772.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051341315.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051345030.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051544084.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051544084.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051546172.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051546172.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051547364.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051547364.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051548284.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051548284.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051549119.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051549119.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051549952.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051549952.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051550823.MP",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051550823.MP.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_051553765.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_080742668.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_080750795.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_104206717.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_104221413.PORTRAIT.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },
          {
              "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/kyoto/KYOTO/PXL_20230207_110500865.jpg",
              "city": "kyoto",
              "description": "description",
              "title": "title", "userId": user.id
          },{
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_022606177.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_023958325.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024002318.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024019843.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024036920.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024045325.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024052789.MP.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230210_024056632.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230211_090240123.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230211_091232460.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230211_094042982.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_000226420.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060441303.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060606078.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060654625.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060703532.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060731080.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060742346.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060752459.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060800579.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060833251.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_060849278.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_061049796.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_061051742.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_061103520.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_061530001.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_061532839.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063937511.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063938480.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063939136.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063945867.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063949655.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063953934.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063955126.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_063957105.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_064817539.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_064832195.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_064950186.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_064954619.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_065023859.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_065507821.MP.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_065540455.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_065549262.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_065553928.PORTRAIT.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_071507355.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_104131003.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_104229855.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_104230786.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230212_104231564.MP.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230213_000828245.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230213_021021600.MP.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230213_021022970.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230214_093501948.MP.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        },
        {
            "imageUrl": "https://japan2023.s3.us-east-2.amazonaws.com/tokyotwo/PXL_20230214_102843184.jpg",
            "city": "tokyo",
            "description": "description",
            "title": "title", userId: user.id
        }


    ]
})

    console.log(`Database has been seeded. 🌱`);


}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


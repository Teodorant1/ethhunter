import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios, { Axios } from "axios";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";

function App() {
  //const [buttonclicked, setbuttonclicked] = useState(false);
  const [walletaddress, setwalletaddress] = useState(
    "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3"
  );

  const [xcord, setxcord] = useState(0);
  const [ycord, setycord] = useState(0);
  const [err, seterr] = useState(" ");

  const [transactions, settransactions] = useState({
    message: "OK",
    status: "1",
    result: [
      {
        blockNumber: "2702578",
        value: "5130000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1480232982",
        hash: "0x1b513dd971aad228eb31f54489803639de167309ac72de68ecdaeb022a7ab42b",
      },
      {
        blockNumber: "2702525",
        value: "5140000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1480232053",
        hash: "0x68db44e9ebec402879ac18887901caaffc43d65bdaa7f9eca9a2ab0707841b1c",
      },
      {
        blockNumber: "2701177",
        value: "5000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1480212453",
        hash: "0x7dd9cc6a3cf68472d3ae829a9cdc0221772295a5d374bb6b8da7cc843c90c738",
      },
      {
        blockNumber: "2685504",
        value: "320000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479985476",
        hash: "0x38f01153deb9c2c96b16b67a6583437afc6c0132c12dd390d369be4ba5399487",
      },
      {
        blockNumber: "2679741",
        value: "96750000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479900387",
        hash: "0x5bbdc832b0974f56bf86c7b0958013dd156f8a497dd9fc074d9e1a73138f8509",
      },
      {
        blockNumber: "2679550",
        value: "224000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479897556",
        hash: "0x993c62e6f2d4aa956f81c84d1d255829028045b61528e95f53d07c3d258927ce",
      },
      {
        blockNumber: "2674843",
        value: "15300000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479829364",
        hash: "0xe0065ad31c8d06f44a36390acbea16afe5c4c9f22877f4bd999d2561f4a871ac",
      },
      {
        blockNumber: "2674799",
        value: "15370000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1479828861",
        hash: "0x033b7346f6e995757dcae9c51e657b9541848fb1d0568258c74f22619d7c5edb",
      },
      {
        blockNumber: "2654878",
        value: "3000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479547275",
        hash: "0x6a304bf1fc2c01fb5a7e0516ede44ce3c9182952d6a14feb19291a78b15db146",
      },
      {
        blockNumber: "2642257",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1479366771",
        hash: "0xece03df474f62302c2b67ff8218bf9ee86b71d76ca0643bbaf34a4862667f34e",
      },
      {
        blockNumber: "2638536",
        value: "100000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479314271",
        hash: "0xf9e706f90beb5120cb89347f923dfea589370719f821b2b4052e15cdbb56cd03",
      },
      {
        blockNumber: "2637830",
        value: "437000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479304224",
        hash: "0x12103d153a9b57f45b5c9ee9a1c18f529ef5b4b5a8a9088fd2385e78d0b9c58d",
      },
      {
        blockNumber: "2631682",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479215534",
        hash: "0x6334d117938937c7628685d12016cd4eee25a07c78f923af62e054655a66f16f",
      },
      {
        blockNumber: "2622800",
        value: "240000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479089437",
        hash: "0x37fffa92a5f4f568405ba4316ffd66faf499307f44fdfaed0b7d84a4bbd34cac",
      },
      {
        blockNumber: "2620132",
        value: "100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1479051981",
        hash: "0x2fde3601a44be5a20cb2e91184d0602d05db4d69579410f029a5d76d55977faf",
      },
      {
        blockNumber: "2620112",
        value: "100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1479051695",
        hash: "0xd35a5f73d16dadddd55989be2a080a2a382cfd4db1987e4fcb218f4a3b8978d8",
      },
      {
        blockNumber: "2618706",
        value: "1400000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1479031936",
        hash: "0xff972e29084d32b31c4d4e5ac2386e72ec8e79e90772ae53184236d24834df56",
      },
      {
        blockNumber: "2618486",
        value: "1400000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1479028914",
        hash: "0x7868809f686a8b6220253351062ac5fdab7e93fff056aafa3d259e743856c7b3",
      },
      {
        blockNumber: "2610381",
        value: "44839850000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478914499",
        hash: "0x77e92a6a34c4fb9b6022d40735df404e9bb60416957dfdce7b6d47490316a42a",
      },
      {
        blockNumber: "2589129",
        value: "100000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478608247",
        hash: "0x11a800452437eeadf23099a87eec3ced9b49c7acdb3831f0da03f5fb9343c788",
      },
      {
        blockNumber: "2575209",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478414726",
        hash: "0x907bcd4dcb8bf7284c1b960169bf4bed53f28237264226679da119d2a599f00d",
      },
      {
        blockNumber: "2567272",
        value: "10000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478299387",
        hash: "0x6316eaaf3c138689d4d4e2bbf38f792376a319ee3643692296c52ed91a173298",
      },
      {
        blockNumber: "2562774",
        value: "7000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478234334",
        hash: "0x47abb3e8bf179d44ce137f543055b031e3530e651ef54bc755a334b863d3b8e0",
      },
      {
        blockNumber: "2558775",
        value: "100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478175772",
        hash: "0xd992748be021e453a58846684f2f4ba56b6327ec4ddbbc1cd08e3b43a6651adb",
      },
      {
        blockNumber: "2558723",
        value: "100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1478174964",
        hash: "0xa92111e4d6edfc5ccaf50aecab42291a49084cb2d324b69200581d3c400732af",
      },
      {
        blockNumber: "2558380",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1478170104",
        hash: "0x7fd45af2cdc1b011f94801d5e2e9e8c4981f73972dd361c3cffe36d6f5706b75",
      },
      {
        blockNumber: "2558139",
        value: "2900000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478166933",
        hash: "0x2d98e12fd119ca797a56eb690388625e1ebd388ab516e75614c22091848a4d0a",
      },
      {
        blockNumber: "2558047",
        value: "5000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478165587",
        hash: "0xbbfac32af38852a670f717d591aac878a4e4913ca041a2013811dc3993d1958e",
      },
      {
        blockNumber: "2556899",
        value: "2000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478148538",
        hash: "0xde2f0b1edec4698d7c21e58f0ac2d83ede8f87fc4baad17e94f82700dc8b97a2",
      },
      {
        blockNumber: "2556204",
        value: "10000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478137982",
        hash: "0xd8d4d7e8fb19d8dfd11f938c0027821d1397743233bb7bcc1f6219dfdda27b1f",
      },
      {
        blockNumber: "2556195",
        value: "900000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478137881",
        hash: "0xc5fcd6f513b540dd991116cfd3d4037df83c18c966e905dcde46ab279e7f92bf",
      },
      {
        blockNumber: "2556185",
        value: "48000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478137742",
        hash: "0x661c0a12cb003db1a6727694071ccaaa42821c42312fe318789a55126cbffab9",
      },
      {
        blockNumber: "2556148",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478137120",
        hash: "0x421b3af4d935e6e2821316998f7fbbd913accc7c7a03ea8bf6c07d50b7550987",
      },
      {
        blockNumber: "2554070",
        value: "400000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478107604",
        hash: "0x123ab67974050fb6111ba41c028bcb0145f3e83f116ed3f8c929cc19ff31fea7",
      },
      {
        blockNumber: "2553530",
        value: "95000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478099452",
        hash: "0xa7656a6aea87f1ed6514b0a1e191345ef851620dff038693746dfc314699ee87",
      },
      {
        blockNumber: "2553479",
        value: "14280333000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Out of gas",
        timeStamp: "1478098664",
        hash: "0xfd045b59b8c507ef9610773c8e86fbac156e81b406de8d886cd3381ade8480f5",
      },
      {
        blockNumber: "2553458",
        value: "5000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478098307",
        hash: "0x726f141afee1a247e2dec5fbf6955dbf384056b20f9402d752e0b575317d1673",
      },
      {
        blockNumber: "2552686",
        value: "49236038000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478087690",
        hash: "0xb0659459af88c2bda76fe6ce5eecff050b01ed901851cb06189d0326283a1532",
      },
      {
        blockNumber: "2552619",
        value: "33030000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478086749",
        hash: "0x15e899ce968a73d1c90eaf4e047e317c5de012951d3969afe9858d016aa42ab3",
      },
      {
        blockNumber: "2552577",
        value: "10100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478086047",
        hash: "0xc144a767df5b8cc2e6f18bdf28d3b8e2c216443b2b5ee21d05aa969ce51df224",
      },
      {
        blockNumber: "2552474",
        value: "10100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478084629",
        hash: "0x4dc71830d41a2e921d5cac875f179ede1a71152088fcbf7c5da355039788c16c",
      },
      {
        blockNumber: "2552238",
        value: "20000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478081311",
        hash: "0x5e53f8918f37a5ad964de50935dde324eb88b2408cc0d8ffab586648c976d613",
      },
      {
        blockNumber: "2551494",
        value: "1500000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478070721",
        hash: "0x09b52bb3acef2a75bdb458670554f9914b39f54a251c5fa8f6f28db6ef0838b6",
      },
      {
        blockNumber: "2551361",
        value: "21100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478068681",
        hash: "0x69bcc27e02b24dc2abd3c55a9ae94730f2bff4dca196f815f6fe80a5428f55d6",
      },
      {
        blockNumber: "2551212",
        value: "20100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478066222",
        hash: "0x5397ecba8052623dae3bc502526e42d8625105ace5a148efc321f65bf1620a58",
      },
      {
        blockNumber: "2550016",
        value: "5000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478048748",
        hash: "0xbfac8f3d98feea00b146df4bdc3d53d1d76bcc96cbb133df7724a0f8d12d1c9c",
      },
      {
        blockNumber: "2548632",
        value: "10000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478027910",
        hash: "0x53716e0490d7158988b5b8e2488dd1bf7aa2128e20afe7d4266093e1b6c07f11",
      },
      {
        blockNumber: "2548425",
        value: "20000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478025208",
        hash: "0xab76ebf799e05f225331c17e8abb47dfcd83650fc399e223bd3c2ac7712ca3f4",
      },
      {
        blockNumber: "2548082",
        value: "490000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478020364",
        hash: "0xe7ede29e0e14a89b2b4684af803f936a9d59f282b44492fcb507789496722f8d",
      },
      {
        blockNumber: "2547998",
        value: "500087832442000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478019059",
        hash: "0xec65561dc9d4d222d32444a795462bfb579b363ddf2d3e58d69128ddc08c83b1",
      },
      {
        blockNumber: "2547938",
        value: "30000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478018381",
        hash: "0x16e288f3a0fe8e3cac2fc5f092648d00a6fd0b9ffa570329039bba6c29296ef5",
      },
      {
        blockNumber: "2547717",
        value: "2000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478014556",
        hash: "0xe407ccbd349a03dbdf7eb40bed16e2c96e0f7289c42fd65d2dc63e01c8c2e000",
      },
      {
        blockNumber: "2547659",
        value: "10000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013797",
        hash: "0xe437e307676a6dbbc041ec2f3327ba545deef76314d31b378f3fe10c319dbd39",
      },
      {
        blockNumber: "2547642",
        value: "2000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013543",
        hash: "0x9e4cbd04cada2a6e4a1e01f9f92a8f639b36875a23b441636a1ebfd4a2f9bfc1",
      },
      {
        blockNumber: "2547633",
        value: "10000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013408",
        hash: "0x0092e552600d9d2cb330f062d00550acbefe9c6f2566e15a3d5c1a7e90043b62",
      },
      {
        blockNumber: "2547633",
        value: "26000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013408",
        hash: "0xf8401fd64dfbabccbdf57df9388832d52e6edadff50a12f13a31061a84a5e7cc",
      },
      {
        blockNumber: "2547619",
        value: "71000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013203",
        hash: "0x2896441f9d1f167b4a3f987d82233e7d238e6a50a227c4b612dbc82f34bb533d",
      },
      {
        blockNumber: "2547613",
        value: "26000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013103",
        hash: "0x31357abc9f0240385314f1778322e37df02761280d0bf4392e898b2605ab9841",
      },
      {
        blockNumber: "2547610",
        value: "13000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013089",
        hash: "0x9c1e2e1c4e70c200c713838abcbd01047e293dc14bb3ad8e10c4a9b99f1a8e98",
      },
      {
        blockNumber: "2547610",
        value: "26000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "1",
        errCode: "Bad jump destination",
        timeStamp: "1478013089",
        hash: "0x7ec728d9c71af608c89820a6ad8e34b572bc002a07242f0cd4e5fc826b176abc",
      },
      {
        blockNumber: "2547606",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478013049",
        hash: "0x32ae2f75d0b0f14c7b208f915e13331f69e0331d3310c409c7fabe918fbac2e1",
      },
      {
        blockNumber: "2547606",
        value: "10000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478013049",
        hash: "0x2b13f565b5e29b792f2aaf8114da6ed904b0989fa86588a8f5c3cb39c0c594da",
      },
      {
        blockNumber: "2547594",
        value: "70000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478012642",
        hash: "0x020a2660579f12783e51bfde4c831006a963cea2e848648db083a03efb20bde6",
      },
      {
        blockNumber: "2547590",
        value: "1000000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1478012596",
        hash: "0xee535e4016e766d9210d0bc47afeff48f12cd05f0b0b00aa0ed7019b4417f505",
      },
      {
        blockNumber: "2535479",
        value: "100000000000000000",
        from: "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
        to: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        isError: "0",
        errCode: "",
        timeStamp: "1477839134",
        hash: "0x1a50f1dc0bc912745f7d09b988669f71d199719e2fb7592c2074ede9578032d0",
      },
      {
        blockNumber: "2535368",
        value: "0",
        from: "0x20d42f2e99a421147acf198d775395cac2e8b03d",
        to: "",
        isError: "0",
        errCode: "",
        timeStamp: "1477837690",
        hash: "0x8a1a9989bda84f80143181a68bc137ecefa64d0d4ebde45dd94fc0cf49e70cb6",
      },
    ],
  });
  const [display, setdisplay] = useState("none");

  function ErrPopup({ err }) {
    return (
      <div
        class='greypill'
        style={{
          position: "absolute",
          display: display,
          top: ycord,
          left: xcord,
          zIndex: 100,
        }}
      >
        {" "}
        {err}{" "}
      </div>
    );
  }

  async function setdetails(e, errCode) {
    e.preventDefault();
    await setdisplay("block");
    await setxcord(e.pageX);
    await setycord(e.pageY);
    await seterr(errCode);
  }

  async function resetdetails(e) {
    e.preventDefault();
    await setdisplay("none");
    await setxcord(0);
    await setycord(0);
    await seterr();
  }

  async function getTransactions() {
    setwalletaddress(document.getElementById("address").value);

    const fetchpayload =
      '{  "address": "' +
      document.getElementById("address").value +
      '","block":' +
      document.getElementById("blocknumber").value +
      "}";

    //   const fetchpayloadJson = JSON.stringify();

    axios
      .post("http://localhost:8001", fetchpayload)
      .then((resp) => {
        const receivedinfo = resp.data;
        settransactions(receivedinfo);
      })
      .catch((error) => console.log(error));
  }

  function getTimeDelta(epochtime) {
    var date = new Date(0);
    date.setUTCSeconds(epochtime);
    const today = Date.now();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + " days ago /" + date;
  }

  return (
    <div className='App'>
      <h1> Latest Transactions @{walletaddress} </h1>
      <h1>
        {" "}
        <div>
          {" "}
          <input
            type='text'
            id='address'
            placeholder='address goes here'
          />
          <input
            type='text'
            id='blocknumber'
            placeholder='block goes here'
          />
          <button
            class='greenpillbutton'
            onClick={() => {
              getTransactions();
            }}
          >
            CLICK TO FETCH DATA
          </button>{" "}
        </div>
      </h1>

      <ErrPopup err={err} />

      <table>
        <thead>
          <tr>
            <td class='blackborder'>Transaction Hash</td>
            <td class='blackborder'>Block</td>
            <td class='blackborder'>Age</td>
            <td class='blackborder'>FROM</td>
            <td class='blackborder'>T0</td>
            <td class='blackborder'>Value</td>
          </tr>
        </thead>
        <tbody>
          {" "}
          {transactions.result.map((transaction, index) => (
            <tr key={index}>
              <td class='blackborder flex-container'>
                {" "}
                <div class='flex-container'>
                  {" "}
                  {transaction.isError === "1" && (
                    <IconContext.Provider
                      value={{ color: "red", size: "25px" }}
                    >
                      <div
                        onMouseEnter={(e) => {
                          e.preventDefault();
                          setdetails(e, transaction.errCode);
                          //  setdisplay("block");
                          //  setxcord(e.pageX);
                          //  setycord(e.pageY);
                          //  seterr(transaction.errCode);
                        }}
                        onMouseLeave={(e) => {
                          e.preventDefault();
                          resetdetails(e);
                          //setdisplay("none");
                        }}
                      >
                        {" "}
                        <BsFillExclamationSquareFill />{" "}
                      </div>
                    </IconContext.Provider>
                  )}{" "}
                  {transaction.hash}{" "}
                </div>
              </td>
              <td class='blackborder'> {transaction.blockNumber}</td>
              <td class='blackborder'>
                {" "}
                {getTimeDelta(transaction.timeStamp)}
              </td>
              <td class='blackborder'>{transaction.from}</td>
              <td class='blackborder'>{transaction.to}</td>
              <td class='blackborder'>
                {transaction.value / 1000000000000000000} Ethereum{" "}
              </td>
              {/* <td>{transaction.isError}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
